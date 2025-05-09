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

        responde.status(200).send()

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

server.listen(8080, () => console.log('server is up'))