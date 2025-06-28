import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

import { connect } from './data/index.js'
import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError } from './logic/errors.js'

//nuevo
import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt //manejador de errores de JWT
import { AuthorizationError } from './errors.js' //constructoras nuestras de api

const { MONGO_URL, PORT, JWT_SECRET } = process.env //nos traemos las variables de entorno que usaremos para sustituir contenido de este archivo

//connect('mongodb://localhost:27017/test') //utilizo la variable de entorno creada para la url de mongo
connect(MONGO_URL)
    .then(() => {
        const api = express()
        const jsonBodyParser = express.json()

        api.use(cors())//Es un middleware que permite que la aplicación web acepte solicitudes desde diferentes orígenes (dominios)

        api.get('/hello', (request, response) => {
            response.send('Hello! 😉')
        })

        api.post('/users', jsonBodyParser, (request, response, next) => {
            try {
                const { name, email, username, password } = request.body
                logic.registerUser(name, email, username, password)
                    .then(() => response.status(201).send())
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        api.post('/users/auth', jsonBodyParser, (request, response, next) => {
            try {
                const { username, password } = request.body
                logic.authenticateUser(username, password)
                    .then(userId => {
                        //response.status(200).json(userId) Antiguo 
                        //En vez de enviar como respuesta el userid configuramos un token que es mucho mas seguro
                        //const token = jwt.sign({ sub: userId }, 'he dormido genial') // Modifico la firma por una variable de entorno
                        const token = jwt.sign({ sub: userId }, JWT_SECRET)
                        response.status(200).json(token)
                    })
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        api.get('/users/self/username', (request, response, next) => {
            try {
                const authorization = request.headers.authorization
                //const userId = authorization.slice(6) Antiguo
                //Al trabajar con token recibiremos una cabecera asi: Bearer codigoToken, para quedarnos solo con el token vamos a obviar los primeros 7 caracteres
                const token = authorization.slice(7)

                //verificamos la integridad y atenticidad del token. Una vez verificado se descodifica y nos devuelve el payload. Pero de ese payload solo quiero el userId asi que lo destructuro (recuerda que payload trae el sub(contenido json) y y el iat(fecha del token))
                //const { sub: userId } = jwt.verify(token, 'he dormido genial')                
                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.getUserUsername(userId)
                    .then(username => response.status(200).json(username))
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        api.post('/posts', jsonBodyParser, (request, response, next) => {
            try {
                const authorization = request.headers.authorization

                //nuevo, cambio nombre variable a token y cambio 6 por 7. Obtengo el userId
                const token = authorization.slice(7)
                //const { sub: userId } = jwt.verify(token, 'he dormido genial')
                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { image, text } = request.body

                logic.createPost(userId, image, text)
                    .then(() => response.status(201).send())
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        api.get('/posts', (request, response, next) => {
            try {
                const authorization = request.headers.authorization

                const token = authorization.slice(7)
                //const { sub: userId } = jwt.verify(token, 'he dormido genial')
                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.getPosts(userId)
                    .then(posts => response.status(200).json(posts))
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        api.delete('/posts/:postId', (request, response, next) => {
            try {
                const authorization = request.headers.authorization

                const token = authorization.slice(7)
                //const { sub: userId } = jwt.verify(token, 'he dormido genial')
                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { postId } = request.params

                logic.removePost(userId, postId)
                    .then(() => response.status(204).send())
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        // error handler (manejador de errores)

        api.use((error, request, response, next) => { //el parametro error lo tenemos gracias a que next nos lo ha enviado
            if (error instanceof ValidationError)
                response.status(400).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof Error)
                response.status(404).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof NotFoundError)
                response.status(404).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof CredentialsError)
                response.status(401).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof AuthorshipError)
                response.status(403).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof DuplicityError)
                response.status(409).json({ error: error.constructor.name, message: error.message })
            //nuevos
            //Cuando se devuelve los errores: 
            // "invalid signature": si esta mal escrita la parte de la firma digital o el payload es valido pero no corresponde a la firma (cambiando directamente algun digito en el test o en la verificacion de este codigo escribo una firma distinta a la que realmente es)
            // "invalid token": si está mal escrita la parte del algoritmo, header
            // ; 
            // ambos provienen de JWT; indicamos que usaremos nuestra propia constructora, AuthorizationError y mantendremos el mensaje original
            else if (error instanceof JsonWebTokenError)
                response.status(401).json({ error: AuthorizationError.name, message: error.message })
            //Cuando se devuelve el error:
            // "Unexpected token '�', \"�\"sub\":\"68\"... is not valid JSON": si está mal escrita la parte del JSON, payload
            // ;
            // este error no lo da JWT sino SyntaxError (aunque no deberia ser asi); como es un poco confuso le ponemos nuestra constructora y ademas lo personalizamos. 
            else if (error instanceof SyntaxError && error.message.includes('JSON'))
                response.status(401).json({ error: AuthorizationError.name, message: 'invalid payload' })

            else
                response.status(500).json({ error: SystemError.name, message: error.message })
        })


        //api.listen(8080, () => console.log('API listening on port 8080')) //modifico el puerto por una variable entorno   
        api.listen(PORT, () => console.log('API listening on port ' + PORT))

    })
    .catch(error => console.error(error))