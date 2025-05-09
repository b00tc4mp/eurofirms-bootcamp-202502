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

        response.send()
    } catch (error) {
        //???
    }
})

server.listen(8080, () => console.log('server is up'))