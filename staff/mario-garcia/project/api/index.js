import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/usersRouter.js'
import { postsRouter } from './routes/postsRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'

const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)//Connect to Mongo  
    .then(() => {
        const api = express() //Tool for our server

        api.use(cors())//Configure the Server to listen any request (everywhere)

        api.get('/hello', (request, responde) => {//Listen one request
            response.send('Hello 😁!')
        })

        api.use('/users', usersRouter) //Listening all request = localhost:8080/users
        api.use('/posts', postsRouter) //Listening all request = localhost:8080/posts

        api.use(errorHandler)//Implement the errorHandler

        api.listen(PORT, () => console.log('API listening on port ' + PORT))//Here we start our Sever with all code that we have executed previously
    })


    .catch(error => console.error(error))