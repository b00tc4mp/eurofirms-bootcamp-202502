fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU5OWI0YzFmZWRlNGNkZWMwY2NmOGIiLCJpYXQiOjE3NTA4NzczNzF9.GQdXSY_BrH7BPuMD7RkHON8sEesUFBStAVQ1Piz8iLI',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://international.quironsalud.com/idcsalud-client/cm/images?locale=es_ES&idMmedia=1250071","doctor":"Ignacio Ginebreda", "treatment":"Arms surgery", "city":"Barcelona","experience":"it was awful"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error('json') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('post created'))
    .catch(error => console.error(error))