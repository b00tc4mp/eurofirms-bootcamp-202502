require('dotenv').config();
import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/usersRouter.js'
import { routinesRouter } from './routes/routinesRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'

const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here...')
        })

        api.use('/users', usersRouter)
        api.use('/routines', routinesRouter)

        api.use(errorHandler)

        api.listen(PORT, () => console.log(`API listening on port ${PORT}`))
    })
    .catch(error => console.error(error))