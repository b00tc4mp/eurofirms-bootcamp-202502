fetch('http://localhost:8080/exercises', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name": "Squat","description": "A lower body exercise that primarily targets the thighs and the glutes.","image": "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/squat.gif","difficulty": "medium","muscleGroup": "legs"}'
})
    .catch(error => { throw new Error('connection error')})
    .then(response => {
        const { status } = response

        if(status === 201) return

        return response.json()
            .catch(error => { throw new Error ('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('exercise created'))
    .catch(error => console.error(error))