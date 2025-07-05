import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/userRouter.js'
import { postsRouter } from './routes/postRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'


const { MONGO_URL, PORT, JWT_SECRET } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()
        
        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here...')
        })


        api.use('/users', usersRouter)
        api.use('/posts', postsRouter)
        
        api.use(errorHandler)

        api.listen(PORT, () => console.log('API listening on port ${PORT)'))
    })
    .catch(error => console.error(error))