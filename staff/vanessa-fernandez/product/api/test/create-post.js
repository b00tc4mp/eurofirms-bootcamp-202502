fetch('http://localhost:8080/posts', {
    method:'POST',
    headers: {
        Authorization: 'Basic user-1',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2E5andvMnM0bjVyejNuNXgxN3FoY3VmMzF4MXllN2ZlYTlqMnhmcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPBZnaTaC92yA/giphy.gif","text":"Hi I am Harry Potter"}'
})
    .catch(error => { throw new Error ('Connection error')})
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
    .then(() => console.log('post created'))
    .catch(error => console.error(error))