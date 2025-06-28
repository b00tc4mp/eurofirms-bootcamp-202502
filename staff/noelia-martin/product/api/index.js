import express from 'express'
import cors from 'cors'
import { connect } from './data/index.js'

// Importamos los agrupadores de rutas
import { usersRouter } from './routes/usersRouter.js'
import { postsRouter } from './routes/postsRouter.js'
//Importamos el manejador de errores
import { errorHandler } from './middlewares/errorHandler.js'



const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here 😉')
        })
        api.use('/users', usersRouter) //Indicamos a la api que en la ruta /users utilice el agrupador de rutas userRouter

        api.use('/posts', postsRouter) //Indicamos a la api que en la ruta /posts utilice el agrupador de rutas postRouter

        api.use(errorHandler) //Indicamos a la api que utilice el manejador de errores que contiene esa constante

        //api.listen(PORT, () => console.log('API listening on port ' + PORT))
        api.listen(PORT, () => console.log(`API listening on port ${PORT}`))

    })
    .catch(error => console.error(error))

//Borramos jsonBodyParser, rutas de users y posts, la variable de entorno JWT_SECRET y manejador de errores (También eliminamos todas las importación que necesitaban)