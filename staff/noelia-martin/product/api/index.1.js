import express from 'express'

const server = express()
const jsonBodyParser = express.json() //este metodo de express permite montar un parseador de Json ,es decir te permite que el servidor reciba un json y lo convierta a objeto

//get es para pedir datos y post para enviar datos

//con este comando creamos una ruta, será localhost:puerto(ultima linea de la configuración, el 8080)/hello
server.get('/hello', (request, response) => {
    response.send('Hello! 😉') //será el contenido que tendra mi pg
})

//localhost:8080/color?q=blue por ejemplo nos devolvera su hexadecimal
server.get('/color', (request, response) => {
    const q = request.query.q //query es una propiedad que permite recoger cualquier parametro que nos pidan, por ejemplo q

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

//jsonBodyParser lo ponemos antes de nuestro manejador de ruta(es decir este contenido: , (request, response) => {}) )
server.post('/users', jsonBodyParser, (request, response) => {
    //el objeto que trae jsonBodyParser lo va a poner en la request

    const user = request.body //este body será el json ya convertido a objeto

    console.log('user', user)

    response.send('user received!') //con esta linea indicamos que hemos recibido bien el usuario
})

server.listen(8080, () => console.log('server is up')) //abrimos el puerto 8080 para la comunicacion con el servidor

//RECUERDA: en cada modificacion de este codigo hay que reiniciar el arranque de neustro servidor