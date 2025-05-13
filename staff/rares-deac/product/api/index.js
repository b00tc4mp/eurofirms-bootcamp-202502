import express from 'express'
import { logic } from './logic/index.js'

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

/*
server.get('/color', (request, response) => {
    const q = request.query.q

    let code
    
    if (q === 'red' )
        code = '#FF0000'
    else if (q === 'green')
        code = '#00FF00'
    else if (q === 'blue')
        code = '#0000FF'
    else if (q === 'yellow')
        code = '#FFFF00'

    response.send(code)
})
*/

/*
A través de jsonBodyParser hay una petición del cliente , parametro request y una respuesta del servidor, parametro response. user contiene el body de la peticion del cliente y el parametro response utiliza send para decirle al cliente que ha recibido el mensaje.
 */

server.post('/users' /* path,route */, jsonBodyParser /* middleware */, (request, response) => {
    try{
    const {name, email, username, password} = request.body

    logic.registerUser(name, email. username, password)

    response.send()

    } catch(error) {
        //???
    }
} /* endpoint */)

server.listen(8080, () => console.log('server is up'))