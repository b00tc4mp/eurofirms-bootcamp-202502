fetch('http://localhost:8080/workouts/workout-5', {
    method: 'DELETE',
    headers: {
        Authorization: 'Basic user-2'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 204) return

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('workout removed'))
    .catch(error => console.error(error))