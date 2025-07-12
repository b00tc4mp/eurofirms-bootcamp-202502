import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'
import { AuthorizationError } from 'com'

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

workoutsRouter.get('/admin', (request, response, next) => {
    try{
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: requesterId, role } = jwt.verify(token, JWT_SECRET)

        if (role !== 'admin')
            throw new AuthorizationError('not allowed')

        const { userId, day } = request.query

        logic.getWorkouts(userId, day)
            .then(workout => response.status(200).json(workout))
            .catch( error => next(error))
    } catch (error) {
        next(error)
    }
})

workoutsRouter.delete('/:workoutId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId, role } = jwt.verify(token, JWT_SECRET)

        if (role !== 'admin')
            throw new AuthorizationError('not allowed')

        const { workoutId } = request.params

        logic.removeWorkout(userId, workoutId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})