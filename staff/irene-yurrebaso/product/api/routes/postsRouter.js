import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonbodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const postsRouter = Router()

//Crear post:
//en la ruta poner solo la barra final '/' ya que '/posts' ya se indica desde api.use en index.js
postsRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        //recuperar el userId de la cabecera enviada a traves de curl
        const authorization = request.headers.authorization
        const token = authorization.slice(7) // Bearer numero-de-token

        //desencriptamos el jwt y obtenemos el userId
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        //recojo el json enviado (image & text) usando jsonBodyParser con el body del objeto request
        const { image, text } = request.body

        logic.createPost(userId, image, text)
            //status 201 sirve para informar de que hemos creado algo
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//Mostrar posts:
postsRouter.get('/', (request, response, next) => {
    try {
        //cual es el user id para usarlo en getPosts, se hace a traves de headers
        const authorization = request.headers.authorization // Basic user-x
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getPosts(userId)
            .then(posts => response.status(200).json(posts))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//Ruta dinamica para eliminar post con el parametro :postId
postsRouter.delete('/:postId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        //recogemos postId del objeto params que viene en la request del header
        //const postId = request.params.postId
        const { postId } = request.params

        logic.removePost(userId, postId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})