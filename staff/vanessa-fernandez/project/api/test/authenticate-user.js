fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:'{"username:"harryP", "password":"123123123"}'
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if(status === 200) 
            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(userId => userId)

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })        
    })
    .then(() => console.log('user authenticated', userId))
    .catch(error => console.error(error))