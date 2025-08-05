import { Router } from 'express';

import { jsonBodyParser } from '../middlewares/jsonBodyParser.js';
import { logic } from '../logic/index.js';
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env


export const userRouter = Router()

userRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password, name, healthCareNumber, dateOfBirth } = request.body

        logic.registerUser(username, password, name, healthCareNumber, dateOfBirth)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})
userRouter.post('/auth', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.authenticateUser(username, password)
            .then(user => {
                const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET)
                response.status(200).json(token)
                // const token = { sub: user.id, role: user.role }
                // response.status(200).json(token)
            })
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})

userRouter.get('/self/namePacient', (request, response, next) => {
    try {
        const authorization = request.headers.authorization

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getNamePacient(userId)
            .then(name => response.status(200).json(name))
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})
userRouter.get('/self/choosePacient', (request, response, next) => {
    try {
        const healthCareNumber = request.query.healthCareNumber

        logic.getChoosePacient(healthCareNumber)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET)
                response.status(200).json(token)
            })
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})