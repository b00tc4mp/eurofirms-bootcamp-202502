import { Router } from 'express';//Importo Router, es un middleware, el cuál permite organizar las rutas de una aplicación en módulos y montarlos en diferentes partes de la aplicación

import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'; //Importo el middleware json()
import { logic } from '../logic/index.js'; //Importo las lógicas
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env


export const usersRouter = Router() //Creamos y exportamos el agrupador de rutas userRouter

//Nos traemos todas las rutas de usuario modificando api por userRouter y omitiendo /users en todas sus rutas
//La barra es el último carácter de todas las rutas, se suele omitir
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

usersRouter.get('/self/username', (request, response, next) => {
    try {
        const authorization = request.headers.authorization

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getUserUsername(userId)
            .then(username => response.status(200).json(username))
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
})
