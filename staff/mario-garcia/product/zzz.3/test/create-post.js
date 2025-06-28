fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-300',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejZiNTg4eWMzcTdxNTVkbTdxazZqbzhiZXlhangxYjEzaXpid2N1MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0NwGpoOVLTAyUJSo/giphy.gif","text":"I am here to support you!"}'
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