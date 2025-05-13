import express from 'express'
import { logic } from './logic/index.js' 

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

server.get('/users', jsonBodyParser, (request, response) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        response.status(201).send() 
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }   
})

server.get('/users/self/username', (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        const username = logic.getUserUsername(userId)

        response.status(200).json(username) 
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message }) 
    }
})

server.post('/post', jsonBodyParser, (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        logic.createPost(userId, Image,text)

        response.status(201).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
   
})

server.listen(8080, () => console.log('server is up'))