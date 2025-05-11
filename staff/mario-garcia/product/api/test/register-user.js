fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {

        'Content-Type': 'application/json'
    },
    body: '{"name":"Scott Summers","email":"scottsummers@ciclope.com","username":"ciclope","password":"123123123"}'
})

    .catch(error => { throw new Error('Connection error') })
    .then(response => {

        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })

    .then(() => console.log('user registered'))
    .catch(error => console.error(error))