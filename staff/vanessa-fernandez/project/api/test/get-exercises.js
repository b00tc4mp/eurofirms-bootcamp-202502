fetch('http://localhost:8080/exercises', {
    method: 'GET'
})
    .catch(error => { throw new Error('Connection error')})
    .then(response => {
        const { status } = response

        if (status ===200)
            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(exercises => exercises)

        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })        
    })
    .then(exercises => console.log('exercises gotten ' , exercises))
    .catch(error => console.error(error))