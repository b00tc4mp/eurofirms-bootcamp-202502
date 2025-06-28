import express from 'express'
import { logic } from './logic/index.js'

const server = express()
const jsonBodyParser = express.json()

server.get('/', (request, response) => {
    response.send('Hello! 😉')
})

server.post('/users', jsonBodyParser, (request, response) => {
    const user = request.body

    

    response.send('user received!')
})

server.listen(8080, () => console.log('server is up'))