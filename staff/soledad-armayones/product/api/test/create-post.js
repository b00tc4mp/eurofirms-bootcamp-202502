fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-2',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZwOWI1MnNmbmk1cGxhNzVzNml2eDJmYWk1eDkxZjYyODFpMTdsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6rQAkBvurR6CI/giphy.gif","text":"photo bella","text":"pin8 dancing"}'
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