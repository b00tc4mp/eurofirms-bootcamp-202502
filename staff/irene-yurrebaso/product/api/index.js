import { connect } from './data/index.js'
import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError, AuthorizationError } from 'com'

const { JsonWebTokenError } = jwt

//process es un objeto de node
const { MONGO_URL, PORT, JWT_SECRET } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()
        //convierte datos de strings a objetos
        const jsonBodyParser = express.json()

        //recibir peticiones del cliente desde cualquier direccion
        api.use(cors())

        api.get('/hello', (request, response) => {
            response.send('Hello! 🥳')
        })

        //Ruta para registrar usuario, convertir a json, endpoint o manejador de ruta (funcion con request & response, y next para llamar al siguiente manejador de errores)
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

        //Ruta para autenticar usuario, convertir a json, manejador de ruta
        api.post('/users/auth', jsonBodyParser, (request, response, next) => {
            try {
                const { username, password } = request.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET)

                        response.status(200).json(token)
                    })
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        //Ruta para traer username
        api.get('/users/self/username', (request, response, next) => {
            try {
                //recogemos la cabecera de curl GET en la request. El objeto headers pone todas las cabeceras en un objeto. A traves de la propiedad authorization le decimos quien es el usuario.
                const authorization = request.headers.authorization
                //recortamos el string a partir de un caracter para obtener solo el ID
                const token = authorization.slice(7) //Bearer numero-de-token

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.getUserUsername(userId)
                    //devolveremos el username como un string en la respuesta de la api
                    .then(username => response.status(200).json(username))
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        //Ruta para crear post
        api.post('/posts', jsonBodyParser, (request, response, next) => {
            try {
                //recuperar el userId de la cabecera enviada a traves de curl
                const authorization = request.headers.authorization 
                const token = authorization.slice(7) // Bearer numero-de-token

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                //recojo el json enviado (image & text) usando jsonBodyParser con el body del objeto request
                const { image, text } = request.body

                logic.createPost(userId, image, text)
                    //status 201 sirve para informar de que hemos creado algo
                    .then(() => response.status(201).send())
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        //Ruta para mostrar posts
        api.get('/posts', (request, response, next) => {
            try {
                //cual es el user id para usarlo en getPosts, se hace a traves de headers
                const authorization = request.headers.authorization // Basic user-x
                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.getPosts(userId)
                    .then(posts => response.status(200).json(posts))
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        //Ruta dinamica para eliminar post con el parametro :postId
        api.delete('/posts/:postId', (request, response, next) => {
            try {
                const authorization = request.headers.authorization 
                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                //recogemos postId del objeto params que viene en la request
                //const postId = request.params.postId
                const { postId } = request.params

                logic.removePost(userId, postId)
                    .then(() => response.status(204).send())
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        //error handler
        //middleware o handle de express para manejar errores
        //el parametro next permite llamar al siguiente manejador de ruta
        api.use((error, request, response, next) => {
            if (error instanceof ValidationError)
                response.status(400).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof CredentialsError)
                response.status(401).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof AuthorshipError)
                response.status(403).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof NotFoundError)
                response.status(404).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof DuplicityError)
                response.status(409).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof JsonWebTokenError)
                response.status(401).json({ error: AuthorizationError.name, message: error.message})
            else if (error instanceof SyntaxError && error.message.includes('JSON'))
                response.status(401).json({ error: AuthorizationError.name, message: 'invalid payload' })
            else
                response.status(500).json({ error: SystemError.name, message: error.message })
        })

        api.listen(PORT, () => console.log('API listening on port ' + PORT))
    })
    .catch(error => console.error(error))