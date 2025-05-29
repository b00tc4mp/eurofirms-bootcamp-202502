fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-2',
        'Content-Type': 'application/json'
    },
    body: ' {"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VhMjJuYndkOXgxMTV6a2NjbHMyeGU0OHdkcTd6NWFnc2t6c2h2NiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif","text":"toma geroma"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 201) return
        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const {error, message} = body

                throw new Error(message)
            })

    })
.then(() => console.log('post created'))
.catch(error => console.error(error))