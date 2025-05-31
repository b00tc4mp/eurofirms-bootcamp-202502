import { connect } from './data/index.js'
import express from 'express'
import { logic } from './logic/index.js'
import cors from 'cors'

connect('mongodb://localhost:27017/test')
    .then(() => {
        const api = express()
        //convierte datos de strings a objetos
        const jsonBodyParser = express.json()

        api.use(cors())

        api.get('/hello', (request, response) => {
            response.send('Hello! 🥳')
        })

        //Ruta para registrar usuario, convertir a json, endpoint o manejador de ruta (funcion con request & response)
        api.post('/users', jsonBodyParser, (request, response) => {
            try {
                const { name, email, username, password } = request.body

                logic.registerUser(name, email, username, password)
                    .then(() => response.status(201).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Ruta para autenticar usuario, convertir a json, manejador de ruta
        api.post('/users/auth', jsonBodyParser, (request, response) => {
            try {
                const { username, password } = request.body

                logic.authenticateUser(username, password)
                    .then(userId => response.status(200).json(userId))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                //si hay error responderemos con estado 500, y un json que tenga todos los datos del error
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Ruta para traer username
        api.get('/users/self/username', (request, response) => {
            try {
                //recogemos la cabecera de curl GET en la request. El objeto headers pone todas las cabeceras en un objeto. A traves de la propiedad authorization le decimos quien es el usuario.
                const authorization = request.headers.authorization // Basic user-1
                //recortamos el string a partir de un caracter para obtener solo el ID
                const userId = authorization.slice(6)

                logic.getUserUsername(userId)
                    //devolveremos el username como un string en la respuesta de la api
                    .then(username => response.status(200).json(username))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Ruta para crear post
        api.post('/posts', jsonBodyParser, (request, response) => {
            try {
                //recuperar el userId de la cabecera enviada a traves de curl
                const authorization = request.headers.authorization //Basic user-x
                const userId = authorization.slice(6)

                //recojo el json enviado (image & text) usando jsonBodyParser con el body del objeto request
                const { image, text } = request.body

                logic.createPost(userId, image, text)
                    //status 201 sirve para informar de que hemos creado algo
                    .then(() => response.status(201).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Ruta para mostrar posts
        api.get('/posts', (request, response) => {
            try {
                //cual es el user id para usarlo en getPosts, se hace a traves de headers
                const authorization = request.headers.authorization // Basic user-x
                const userId = authorization.slice(6)

                logic.getPosts(userId)
                    .then(posts => response.status(200).json(posts))
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Ruta dinamica para eliminar post con el parametro :postId
        api.delete('/posts/:postId', (request, response) => {
            try {
                const authorization = request.headers.authorization //Basic user-x
                const userId = authorization.slice(6)

                //recogemos postId del objeto params que viene en la request
                //const postId = request.params.postId
                const { postId } = request.params

                logic.removePost(userId, postId)
                    .then(() => response.status(204).send())
                    .catch(error => response.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                response.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.listen(8080, () => console.log('API listening on port 8080'))
    })
    .catch(error => console.error(error))