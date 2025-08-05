import express from 'express'
import cors from 'cors'
import { connect } from './data/index.js'

import { userRouter } from './routes/userRouter.js'

import { errorHandler } from './middlewares/errorHandler.js'



const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (request, response) => {
            response.send('Hello! API here 😉')
        })
        api.use('/user', userRouter)


        api.use(errorHandler) //Indicamos a la api que utilice el manejador de errores que contiene esa constante

        //api.listen(PORT, () => console.log('API listening on port ' + PORT))
        api.listen(PORT, () => console.log(`API listening on port ${PORT}`))

    })
    .catch(error => console.error(error))

//Borramos jsonBodyPars