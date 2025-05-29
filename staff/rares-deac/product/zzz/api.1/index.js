import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

const api = express()
const jsonBodyParser = express.json()

api.use(cors())

api.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

/*
api.get('/color', (request, response) => {
    const q = request.query.q

    let code
    
    if (q === 'red' )
        code = '#FF0000'
    else if (q === 'green')
        code = '#00FF00'
    else if (q === 'blue')
        code = '#0000FF'
    else if (q === 'yellow')
        code = '#FFFF00'

    response.send(code)
})
*/

/*
A través de jsonBodyParser hay una petición del cliente , parametro request y una respuesta del servidor, parametro response. user contiene el body de la peticion del cliente y el parametro response utiliza send para decirle al cliente que ha recibido el mensaje.
 */

api.post('/users' /* path,route */, jsonBodyParser /* middleware */, (request, response) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        response.status(201).send()

    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
} /* endpoint */)

api.post('/users/auth', jsonBodyParser, (request, response) => {
    try {
        const { username, password} = request.body

        const userId = logic.authenticateUser(username, password)

        response.status(200).json(userId)
    } catch(error){
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

/**
 * Pide a la Api el id de usuario de la base de users, a través de autenticarse a traves de authorization y se devuelve en formato json el username 
 */

api.get('/users/self/username', (request, response) => {
    try {
        /**
         * Recupera la cabecera de la autorizacion con el metodo slice y recupera el id de usuario
         */

        const authorization = request.headers.authorization // Basic user-1
        const userId = authorization.slice(6)
        
        const username = logic.getUserUsername(userId)

        response.status(200).json(username)
    } catch(error) {
        response.status(500),json({error: error.constructor.name, message: error.message})
    }
})

api.post('/posts', jsonBodyParser, (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-1
        const userId = authorization.slice(6)

        const { image, text} = request.body
        
        logic.createPost(userId, image, text)        

        response.status(201).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/posts', (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        const posts = logic.getPosts(userId)

        response.status(200).json(posts)
    } catch(error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

api.delete('/posts/:postId', (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        // const postId = request.params.postId

        const { postId } = request.params

        logic.removePost(userId, postId)

        response.status(204).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message:error.message })
    }
})

api.listen(8080, () => console.log('API listening on port 8080'))