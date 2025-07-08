import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const postsRouter = Router()

postsRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { image, text } = request.body

        logic.createPost(userId, image, text)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    }   catch (error) {
            next(error)
    }
})

postsRouter.get('/', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getPosts(userId)
            .then(posts => response.status(200).json(posts))
            .catch(error => next(error))
    }   catch (error) {
        next(error)
    }
})

postsRouter.delete('/:postId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub:userId } = jwt.verify(token, JWT_SECRET)

        const { postId } = request.params

        logic.removePost(userId, postId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    }   catch (error) {
        next(error)
    }
})