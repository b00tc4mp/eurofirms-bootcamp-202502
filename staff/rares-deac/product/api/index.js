import { connect } from './data/index.js'
import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

connect('mongodb://localhost:27017/test')
    .then(() => {
        const api = express()
        const jsonBodyParser = express.json()

        api.use(cors())

        api.get('/hello', (request, response) => {
            response.send('Hello! 😉')
        })

        api.post('/users' /* path,route */, jsonBodyParser /* middleware */, (request, response) => {
            try {
                const { name, email, username, password } = request.body

                logic.registerUser(name, email, username, password)
                    .then(() => response.status(201).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        } /* endpoint */)

        api.post('/users/auth', jsonBodyParser, (request, response) => {
            try {
                const { username, password } = request.body

                logic.authenticateUser(username, password)
                    .then(userId => response.status(200).json(userId))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        /**
         * Pide a la Api el id de usuario de la base de users, a través de autenticarse a traves de authorization y se devuelve en formato json el username 
         */

        api.get('/users/self/username', (request, response) => {
            try {
                /**
                 * Recupera la cabecera de la autorizacion con el metodo slice y recupera el id de usuario
                 */

                const authorization = request.headers.authorization // Basic user-1
                const userId = authorization.slice(6)

                logic.getUserUsername(userId)
                    .then(username => response.status(200).json(username))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500), json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (request, response) => {
            try {
                const authorization = request.headers.authorization // Basic user-1
                const userId = authorization.slice(6)

                const { image, text } = request.body

                logic.createPost(userId, image, text)
                    .then(() => response.status(201).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/posts', (request, response) => {
            try {
                const authorization = request.headers.authorization // Basic user-x
                const userId = authorization.slice(6)

                logic.getPosts(userId)
                    .then(posts => response.status(200).json(posts))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/posts/:postId', (request, response) => {
            try {
                const authorization = request.headers.authorization // Basic user-x
                const userId = authorization.slice(6)

                // const postId = request.params.postId

                const { postId } = request.params

                logic.removePost(userId, postId)
                    .then(() => response.status(204).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })
        api.listen(8080, () => console.log('API listening on port 8080'))
    })
    .catch(error => console.error(error))
