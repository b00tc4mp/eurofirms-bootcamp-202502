import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/usersRouter.js'
import { postsRouter } from './routes/postsRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'

//process es un objeto de node
const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()

        //recibir peticiones del cliente desde cualquier direccion
        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here...')
        })

        //forma de usar rutas con Router de express
        //cómo funciona '.use': cualquier ruta q sea '/users', q se envíe al segundo parámetro userRouter
        api.use('/users', usersRouter)
        api.use('/posts', postsRouter)

        api.use(errorHandler)

        api.listen(PORT, () => console.log(`API listening on port ${PORT}`))
    })
    .catch(error => console.error(error))