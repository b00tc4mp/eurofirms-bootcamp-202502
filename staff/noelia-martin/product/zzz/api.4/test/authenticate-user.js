fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username":"peterpan","password":"123123123"}'
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 200)
            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(userId => userId) //las funciones que solo contienen una variable, es igual que si pusieramos return variable

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(userId => console.log('user authenticated', userId))
    .catch(error => console.error(error))