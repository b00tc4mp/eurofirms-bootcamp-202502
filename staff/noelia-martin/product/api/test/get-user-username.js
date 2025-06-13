fetch('http://localhost:8080/users/self/username', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ0NGQ3NThiODY0OTY0N2E5ZDk1YmIiLCJpYXQiOjE3NDkzMjE3OTd9.xyJOo20yW_8BwGjAEMlIRpS7j_V37kzP50weiU8DWmg'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 200)
            return response.json()
                .catch(error => { throw new Error('json error') })
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