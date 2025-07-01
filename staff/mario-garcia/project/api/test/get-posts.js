fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU5OWI0YzFmZWRlNGNkZWMwY2NmOGIiLCJpYXQiOjE3NTA4NzczNzF9.GQdXSY_BrH7BPuMD7RkHON8sEesUFBStAVQ1Piz8iLI'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status = 200)
            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(posts => posts)

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(posts => console.log(posts))
    .catch(error => console.error(error))