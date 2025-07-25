import { Router } from 'express'
import { jsonBodyParser } from './middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env


export const usersRouter = Router()

usersRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

usersRouter.post('/auth', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.authenticateUser(username, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET)

                response.status(200).json(token)
            })
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

/**
         * Pide a la Api el id de usuario de la base de users, a través de autenticarse a traves de authorization y se devuelve en formato json el username 
         */

usersRouter.get('/self/username', (request, response, next) => {
    try {
        /**
         * Recupera la cabecera de la autorizacion con el metodo slice y recupera el id de usuario
         */

        const authorization = request.headers.authorization
        const token = authorization.slice(7) // Bearer afdnaspoapoassd

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getUserUsername(userId)
            .then(username => response.status(200).json(username))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})