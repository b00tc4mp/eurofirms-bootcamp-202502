import { connect } from './data/index.js'
import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'
import { AuthorshipError, CredentialsError, DuplicityError, NotFoundError, SystemError, ValidationError } from './logic/errors.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        const api = express()
        const jsonBodyParser = express.json()

        api.use(cors())

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
                    .then(userId => response.status(200).json(userId))
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })

        api.get('/users/self/username', (request, response, next) => {
            try {
                const authorization = request.headers.authorization
                const userId = authorization.slice(6)

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

        // error handler

        api.use((error, request, response, next) => {
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

        api.listen(8080, () => console.log('API listening on port 8080'))
    })
    .catch(error => console.error(error))
