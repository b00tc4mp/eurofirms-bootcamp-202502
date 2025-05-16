import express from 'express'

//este index hace el mismo trabajo de las view de nuestra apliación, asi que importamos todas las lógicas que va a necesitar
import { logic } from './logic/index.js'

const server = express()
const jsonBodyParser = express.json()

//get es para pedir datos y post para enviar datos

server.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

server.post('/users', jsonBodyParser, (request, response) => {
    //llamamos  a la logica, como siempre con un  try/catch
    try {
        //antiguo: const user = request.body 
        //como es un objeto lo vamos a destructurar
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)

        //si no configuro el estado automaticamente me devolverá un 200; pero lo vamos a dejar configurado
        //response.send()
        response.status(201).send()
    } catch (error) {
        //responderemos con el nombre de la constructora del error y el mensaje
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

//igual que la ruta /users(que es de registro), pero esta ruta sera users/auth y usará su propia logica
server.post('/users/auth', jsonBodyParser, (request, response) => {
    try {
        const { username, password } = request.body
        const userId = logic.authenticateUser(username, password)

        response.status(200).json(userId)
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/users/self/username', (request, response) => {
    try {
        const authorization = request.headers.authorization // nos traemos el contenido de la cabecera: Basic user-x
        const userId = authorization.slice(6) //recortamos y nos quedamos solo con el id

        const username = logic.getUserUsername(userId) //llamamos  a la logica con el id y ya respondemos

        response.status(200).json(username)
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/posts', jsonBodyParser, (request, response) => {
    try {
        //recogemos el dato de la cabecera: userId
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        //reogemos el json: destructuro y asi lo tengo ya en variables separadas
        const { image, text } = request.body

        logic.createPost(userId, image, text) //se crea el posts con los parametros recibidos de curl

        response.status(201).send()
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

//el estatus 201 informa que hemos creado algo, asi que lo ponemos tras el createPost y createUsers

//al ser un metodo distinto al utilizado anteriormente, podemos utilizar la misma ruta; idem en el ultimo(en delete)
//mismos comentarios de /users/self/username
server.get('/posts', (request, response) => {
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        const posts = logic.getPosts(userId)

        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.delete('/posts/:postId', (request, response) => { //al poner en la ruta dos puntos se indica que lo que hay a continuacion es variable
    try {
        const authorization = request.headers.authorization // Basic user-x
        const userId = authorization.slice(6)

        //nos traemos el postId con el objeto params seguido del mismo nombre indicado en la ruta
        //const postId = request.params.postId
        const { postId } = request.params //usando destructuring

        logic.removePost(userId, postId)

        response.status(204).send() //204 permite decir ha ido todo bien, sin mas dato
    } catch (error) {
        response.status(500).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8080, () => console.log('server is up')) 
