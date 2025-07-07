fetch('http://localhost:8080/worksout?day=Monday', {
    method: 'GET',
    headers: {
        Authorization: 'Basic user-1'
    }
})
    .catch(error => { throw new Error('connection error')})
    .then(response => {
        const { status } = response

        if(status === 200) 
            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(workout => workout)

        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            } )
    })
    .then(workout => console.log(workout))
    .catch(error => console.error(error))