import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const workoutsRouter = Router()

workoutsRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { day, exercises } = request.body

        logic.createWorkout(userId, day, exercises)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

workoutsRouter.get('/', (request, response, next) => {
    try{
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { day } = request.query

        logic.getWorkouts(userId, day)
            .then(workout => response.status(200).json(workout))
            .catch(error => next(error))
    } catch(error) {
        next(error)
    }
})