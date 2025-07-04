fetch('http://localhost:8080/users/profile  ', {
    method:'PATCH',
    headers: {
        Authorization: 'Basic user-1',
        'Content-Type': 'application/json'
    },
    body: '{"gender":"female", "weight": 50, "height": 150}'
})
    .catch(error => { throw new Error ('Connection error')})
    .then(response => {
        const { status } = response

        if(status === 201) return

        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('profile completed'))
    .catch(error => console.error(error))