import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

import { connect } from './data/index.js' //nuevo
import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError } from './logic/errors.js'

//se crea la conexion a la BD y todo el contenido que teniamos lo metemos en el .then y en .catch escribimos en consola posibles errores
connect('mongodb://localhost:27017/test')
    .then(() => {
        const api = express()
        const jsonBodyParser = express.json()

        api.use(cors()) //Es un middleware que permite que la aplicación web acepte solicitudes desde diferentes orígenes (dominios)

        api.get('/hello', (request, response) => {
            response.send('Hello! 😉')
        })

        api.post('/users', jsonBodyParser, (request, response, next) => {
            try {
                const { name, email, username, password } = request.body
                //para las llamadas a lógicas hay que crear control de errores asincronos
                //en .then configuramos codigo 201 y en .catch el 500(igual que tenemos en el catch sincrono)
                logic.registerUser(name, email, username, password)
                    .then(() => response.status(201).send())
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })
        //version antigua
        // api.post('/users', jsonBodyParser, (request, response) => {
        //     try {

        //         const { name, email, username, password } = request.body

        //         logic.registerUser(name, email, username, password)
        //         response.status(201).send()
        //     } catch (error) {
        //         response.status(500).json({ error: error.constructor.name, message: error.message })
        //     }
        // })

        api.post('/users/auth', jsonBodyParser, (request, response, next) => {
            try {
                const { username, password } = request.body
                //nuevo
                logic.authenticateUser(username, password)
                    .then(userId => response.status(200).json(userId))
                    .catch(error => next(error))

            } catch (error) {
                next(error)
            }
        })

        // version antigua
        // api.post('/users/auth', jsonBodyParser, (request, response) => {
        //     try {
        //         const { username, password } = request.body
        //         const userId = logic.authenticateUser(username, password)

        //         response.status(200).json(userId)
        //     } catch (error) {
        //         response.status(500).json({ error: error.constructor.name, message: error.message })
        //     }
        // })

        api.get('/users/self/username', (request, response, next) => {
            try {
                const authorization = request.headers.authorization
                const userId = authorization.slice(6)
                //nuevo
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
                const userId = authorization.slice(6)
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
                const userId = authorization.slice(6)

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
                const userId = authorization.slice(6)
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
            else if (error instanceof NotFoundError)
                response.status(404).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof CredentialsError)
                response.status(401).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof AuthorshipError)
                response.status(403).json({ error: error.constructor.name, message: error.message })
            else if (error instanceof DuplicityError)
                response.status(409).json({ error: error.constructor.name, message: error.message })
            else
                response.status(500).json({ error: SystemError.name, message: error.message })
        })
        //Segun la constructora del error, configuramos un estado de error distinto
        //Dejamos como ultima opción un error 500 e indicamos que es la constructora de SystemError

        api.listen(8080, () => console.log('API listening on port 8080'))

    })
    .catch(error => console.error(error))

//Borramos todos los errores 500 para configurarlo en el handler de errores
//borramos las lineas: response.status(500).json({ error: error.constructor.name, message: error.message })
//las modificamos por: next(error)
//en el manejador de todas las rutas metemos(en el middleware): next, el cuál es una funcion encargada de mandarnos a api.use(es decir al siguiente handler que es el manejador de errores)