fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-20',
        'Content-Type': 'application/json'
    },
    body: '{"image": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWExcmlycmMzcWU2cTc2eDZ2Y2VlNXQwYXpodWs2YTNxd3BwY3k0eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12mRllHWXpt4M8/giphy.gif", "text": "enseño a mi nieto"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response 

        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error ('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('post created'))
    .catch(error => console.error(error))