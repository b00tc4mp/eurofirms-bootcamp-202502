import express from 'express'

const server = express()
const jsonBodyParser = express.json()

server.get('/hello', (request, responde) => {

    responde.send('Hello!😁')

})

server.get('/color', (request, responde) => {

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

    responde.send(code)

})

server.post('/users', jsonBodyParser, (request, responde) => {

    const user = request.body

    console.log('user', user)

    responde.send('user received!')

})

server.listen(8080, () => console.log('server is up'))