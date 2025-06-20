import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

const server = express()
const jsonBodyParser = express.json()

server.use(cors())

server.post('/users', jsonBodyParser, (request, response) => {
    try{
        const { name, email, username, password } = request.body
        
        logic.registerUser(name, email, username, password)

        response.status(201).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, mesagge: error.message})
    }
})