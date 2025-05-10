import express from 'express'
import { logic } from './logic/index.js'

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, responde) => {

    responde.send('Hello!😁')

})

server.post('/users', jsonBodyParser, (request, responde) => {

    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        responde.status(201).send()

    } catch (error) {

        responde.status(500).json({ error: error.constructor.name, message: error.message })

    }
})

server.post('/users/auth', jsonBodyParser, (request, responde) => {

    try {

        const { username, password } = request.body

        const userId = logic.authenticateUser(username, password)

        responde.status(200).json(userId)

    } catch (error) {

        responde.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/users/self/username', (request, response) => {

    try {

        const authorization = request.headers.authorization // Basic user-X

        const userId = authorization.slice(6)

        const username = logic.getUserUsername(userId)

        response.status(200).json(username)

    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/posts', jsonBodyParser, (request, response) => {

    try {

        const authorization = request.headers.authorization // Basic user-X

        const userId = authorization.slice(6)

        const { image, text } = request.body

        logic.createPost(userId, image, text)

        response.status(201).send()

    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/posts', (request, response) => {

    try {

        const authorization = request.headers.authorization // 

        const userId = authorization.slice(6)

        const posts = logic.getPosts(userId)

        response.status(200).json(posts)

    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})


server.listen(8080, () => console.log('server is up'))