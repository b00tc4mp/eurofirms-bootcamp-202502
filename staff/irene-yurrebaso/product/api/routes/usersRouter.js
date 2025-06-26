//Router es una funcion constructora q hace de agrupador de rutas, vamos a agrupar rutas de usario y rutas de posts
import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

//todas las rutas de usuario q teniamos en index.js ahora las vamos a definir dentro del objeto userRouter
export const usersRouter = Router()

//Registrar usario:
//1. hacen una llamada 'post' a la ruta de usuario de la api
//2. parsear el json q me envian
//3. despues pasamos la informacion por el endpoint o manejador de ruta (funcion con request & response, y next para llamar al siguiente manejador de errores)
//en la ruta dejamos solo la barra final "/" sin poner "/users", ya que esto se indica desde index.js
usersRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { name, email, username, password } = request.body

        logic.registerUser(name, email, username, password)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//Autenticar usuario:
//cuando alguien llame a '/users/auth' se va a disparar esta ruta
usersRouter.post('/auth', jsonBodyParser, (request, response, next) => {
    try {
        const { username, password } = request.body

        logic.authenticateUser(username, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET)

                response.status(200).json(token)
            })
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//Traer username:
usersRouter.get('/self/username', (request, response, next) => {
    try {
        //recogemos la cabecera de curl GET en la request. El objeto headers pone todas las cabeceras en un objeto. A traves de la propiedad authorization le decimos quien es el usuario.
        const authorization = request.headers.authorization
        //recortamos el string a partir de un caracter para obtener solo el ID
        const token = authorization.slice(7) //Bearer numero-de-token

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getUserUsername(userId)
            //devolveremos el username como un string en la respuesta de la api
            .then(username => response.status(200).json(username))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})