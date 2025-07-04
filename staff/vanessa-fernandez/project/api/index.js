import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/usersRouter.js'
import { exercisesRouter } from './routes/exercisesRouter.js'
import { worksoutRouter } from './routes/worksOutRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'

const { MONGO_URL, PORT } = process.env

connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/hello', (request, response) => {
            response.send('Hello ! 👋')
        })

        api.use('/users', usersRouter)
        api.use('/exercises', exercisesRouter)
        api.use('/worksout', worksoutRouter)

        api.use(errorHandler)
        
        api.listen(PORT, () => console.log('API listening on port ' + PORT))
    })
    .catch(error => console.error(error))