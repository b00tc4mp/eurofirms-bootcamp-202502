fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Mercedes","email":"mercedes@pan.com","username":"mercedes","password":"123123123"}'
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        //const status = response.status
        const { status } = response

        if (status === 201) return

        return response.json() //como retornamos un jsoon por seguridad controlamos un posible error
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('user registered'))
    .catch(error => console.error(error))