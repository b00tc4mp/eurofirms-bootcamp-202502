import express from 'express'

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, response) => {
    response.send('Hello! 😉')
})

server.get('/color', (request, response) => {
    const q = request.query.q

    let code

    if (q === 'red')
        code = '#FF0000'
    else if (q === 'green')
        code = '#00FF00'
    else if (q === 'blue')
        code = '#0000FF'
    else if (q === 'yellow')
        code = '#FFFF00'

    response.send(code)
})

server.post('/users' /* path,route */, jsonBodyParser /* middleware */, (request, response) => {
    const user = request.body

    console.log('user', user)

    response.send('user received!')
} /* endpoint */)

server.listen(8080, () => console.log('server is up'))