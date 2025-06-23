fetch('http://localhost:8080/users/self/username', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODUxYmM3ZGFmNDg2NGE0MmZlZDJjZTMiLCJpYXQiOjE3NTA3MDI0MTR9.-7t8wCYu75vPNSelKRo7X7yH4SVrqE03lO9KVwyxfAo'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 200)
            return response.json()
                .catch(error => { throw new Error ('json error') })
                .then(username => username)

        return response.json()
           .catch(error => { throw new Error('json error') })
           .then(body => {
            const { error, message } = body

            throw new Error(message)
           })
    })
    .then(username => console.log('user username gotten', username))
    .catch(error => console.error(error))