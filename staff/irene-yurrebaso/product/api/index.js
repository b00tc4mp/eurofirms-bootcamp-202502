import express, { json } from 'express'

import { logic } from './logic/index.js'

const server = express()

//convierte datos en strings a objetos
const jsonBodyParser = express.json() 

server.get('/hello', (request, response) => {
    response.send('Hello! 🥳')
})

//Ruta para registrar usuario, convertir a json, endpoint o manejador de ruta (funcion con request & response)
server.post('/users', jsonBodyParser, (request, response) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        response.status(201).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message})
    }
})

//Ruta para autenticar usuario, convertir a json, manejador de ruta
server.post('/users/auth', jsonBodyParser, (request, response) => {
    try {
        const { username, password } = request.body

        const userId = logic.authenticateUser(username, password)
        
        response.status(200).json(userId)
    } catch (error) {
        //si hay error responderemos con estado 500, y un json que tenga todos los datos del error
        response.status(500).json({ error: error.constructor.name})
    }
})

server.listen(8080, () => console.log('server is up'))