fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODUwNTNmNWI3ZDhhOTZmMjAzMmE4ZTMiLCJpYXQiOjE3NTAwOTQ5NDV9._N5_K5wLwZHQMKGz_jCBEy0A7gEYwaGYMWTCwq0Ywks',
        'Content-type': 'application/json'
    },

    body: '{"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif","text":"pin8 dancing"}'
})

    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body
                throw new Error(message)
            })

    })
    .then(() => console.log('post created'))
    .catch(error => console.error(error))