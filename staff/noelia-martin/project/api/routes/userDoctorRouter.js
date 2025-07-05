import { Router } from 'express';

import { jsonBodyParser } from '../middlewares/jsonBodyParser.js';
import { logic } from '../logic/index.js';
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env


export const userDoctorRouter = Router()

userDoctorRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.registerUserDoctor(username, password)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})
userDoctorRouter.post('/auth', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.authenticateUserDoctor(username, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET)
                response.status(200).json(token)
            })
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})

userDoctorRouter.get('/self/username', (request, response, next) => {
    try {
        const authorization = request.headers.authorization

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getUserDoctorUsername(userId)
            .then(username => response.status(200).json(username))
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})

userDoctorRouter.post('/self/chooseChild', jsonBodyParser, (request, response, next) => {
    try {
        const { healthCareNumber } = request.body

        logic.getUserDoctorChooseChild(healthCareNumber)
            .then(userFamily => {
                const tokenFamily = jwt.sign({ sub: userFamily.id, nameChild: userFamily.nameChild }, JWT_SECRET)
                response.status(200).json(tokenFamily)
            })
            //.then(userFamily => response.status(200).json(userFamily)) //paso entero el user, por si me interesara para asignarle los formularios
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})