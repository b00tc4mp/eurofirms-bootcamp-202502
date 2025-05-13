import express, { json } from 'express'

import { logic } from './logic/index.js'

const server = express()

//convierte datos de strings a objetos
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

//Ruta para traer username
server.get('/users/self/username', (request, response) => {
    try {
        //recogemos la cabecera de curl GET en la request. El objeto headers pone todas las cabeceras en un objeto. A traves de la propiedad authorization le decimos quien es el usuario.
        const authorization = request.headers.authorization // Basic user-1

        //recortamos el string a partir de un caracter para obtener solo el ID
        const userId = authorization.slice(6)

        const username = logic.getUserUsername(userId)

        //devolveremos el username como un string en la respuesta de la api
        response.status(200).json(username)
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8080, () => console.log('server is up'))