//Configuramos la peticion con fetch (equivalente a lo que haciamos antes con curl en la terminal)
fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username": "petrapan","password": "123123123"}'
})

.catch(error => {throw new Error('connection error')})
.then(response => {
    //const status = response.status
    const { status } = response

    if (status === 200) 
        return response.json() //si todo OK retornamos json con id de usuario
            .catch(error => { throw new Error ('json error')})
            .then(userId => userId)
    //si ha ido mal devuelve el error de la response y lo convierte a objeto
    return response.json()
        .catch(error => { throw new Error('json error')})
        .then(body => {
            const { error, message } = body

            throw new Error(message)
        })
})

//si todo ha ido bien poner un mensaje en consola
.then(userId => console.log('user authenticated', userId))
.catch(error => console.error(error))