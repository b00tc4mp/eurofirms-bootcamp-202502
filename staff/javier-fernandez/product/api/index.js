import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/'
import { postsRouter } from './routes/postsRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'

const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()
        
        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here...')
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

        api.use('/users', usersRouter)
        api.use('/posts', postsRouter)

        api.use(errorHandler)

        api.listen(PORT, () => console.log('API listening on port $ {PORT}'))
    })
    .catch(error => console.error(error))