import { Router } from 'express';

import { jsonBodyParser } from '../middlewares/jsonBodyParser.js';
import { logic } from '../logic/index.js';
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env


export const userFamilyRouter = Router()

userFamilyRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password, nameChild, healthCareNumber, dateOfBirth } = request.body

        logic.registerUserFamily(username, password, nameChild, healthCareNumber, dateOfBirth)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})
userFamilyRouter.post('/auth', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.authenticateUserFamily(username, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET)
                response.status(200).json(token)
            })
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})

userFamilyRouter.get('/self/nameChild', (request, response, next) => {
    try {
        const authorization = request.headers.authorization

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getUserFamilyNameChild(userId)
            .then(nameChild => response.status(200).json(nameChild))
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})