fetch('http://localhost:8080/posts/685055b7b7d8a96f2032a8e7', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODUwNTNmNWI3ZDhhOTZmMjAzMmE4ZTMiLCJpYXQiOjE3NTAwOTQ5NDV9._N5_K5wLwZHQMKGz_jCBEy0A7gEYwaGYMWTCwq0Ywks'
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
    .then(() => console.log('post removed'))
    .catch(error => console.error(error))