//Configuramos la peticion con fetch (equivalente a lo que haciamos antes con curl en la terminal)
fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Pato Donald","email": "pato@donald.com","username": "patodonald","password": "123123123"}'
})

.catch(error => {throw new Error('connection error')})
.then(response => {
    //const status = response.status
    const { status } = response

    if (status === 201) return //si todo OK salimos de la funcion

    //si ha ido mal devuelve el error de la response y lo convierte a objeto
    return response.json()
        .catch(error => { throw new Error('json error')})
        .then(body => {
            const { error, message } = body

            throw new Error(message)
        })
})
.then(() => console.log('user registered'))
.catch(error => console.log(error))