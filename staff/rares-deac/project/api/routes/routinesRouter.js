import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const routinesRouter = Router()

routinesRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { title, description } = request.body

        logic.createRoutine(userId, title, description)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    }   catch (error) {
            next(error)
    }
})

routinesRouter.get('/', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getRoutines(userId)
            .then(routines => response.status(200).json(routines))
            .catch(error => next(error))
    }   catch (error) {
        next(error)
    }
})

routinesRouter.delete('/:routineId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub:userId } = jwt.verify(token, JWT_SECRET)

        const { routineId } = request.params

        logic.removeRoutine(userId, routineId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    }   catch (error) {
        next(error)
    }
})