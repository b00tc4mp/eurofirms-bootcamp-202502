import express from 'express'
import { logic } from './logic/index.js'

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

server.post('/users', jsonBodyParser, (request, response) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        response.status(201).send()
    } catch (error) {
        response.status(500), json({
            error: error.constructor.name,
            message: error.message
        })
    }
})

server.post('/users/auth', jsonBodyParser, (request, response) => {
    try {
        const { username, password } = request.body
        const userId = logic.authenticateUser(username, password)

        response.status(200).json(userId)
    } catch (error) {
        response.status(500), json({
            error: error.constructor.name,
            message: error.message
        })
    }
})

server.get('/users/self/username', (request, response) => {
    try {
        const authorization = request.headers.authorization //basic user-x

        const userId = authorization.slice(6)

        const username = logic.getUserUsername(userId)

        response.status(200).json(username)
    } catch (error) {
        response.status(500).json({
            error: error.constructor.name,
            mesage: error.mesage
        })
    }
})

server.post('/posts', jsonBodyParser, (request, response) => {
    try {
        const authorization = request.headers.authorization

        const userId = authorization.slice(6)

        const { image, text } = request.body

        logic.createPost(userId, image, text)

        response.status(201).send()
    } catch (error) {
        response.status(500).json({
            error: error.cosntructor.name,
            message: error.message
        })
    }
})

server.get('/posts', (request, response) => {
    try {
        const authorization = request.headers.authorization // basic user-x
        const userId = authorization.slice(6)

        const posts = logic.getPosts(userId)

        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json({ error: error.constructor.name,
        message: error.message})
    }
})

server.delete('/posts/:postId', (request, response) => {
    try {
        const authorization = request.headers.authorization // basic user-x
        const userId = authorization.slice(6) //user-x

        //const postId = request.params.postId
        const { postId } = request.params

        logic.removePost(userId, postId)

        response.status(204).send()
    } catch (error) {
        response.status(500).json({error:error.cosntructor.name,
            message: error.message })
    }
})

server.listen(8080, () => console.log('server is up'))