fetch ('http://localhost:9090/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username":"peterpan","password":"123123123"}'
})

    .catch(error => {throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status ===200)
            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(token => token)

        return response.json()
            .catch(error => { throw new Error ('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)

            })
              
    })
    .then(token => console.log('user authenticated', token))
    .catch(error => console.error(error))