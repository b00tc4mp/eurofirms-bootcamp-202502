fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ5ZDdiMTgxOTZlMDJiZDhmYThlMzMiLCJpYXQiOjE3NDk2Njk5MjJ9.ogrKYdmcNEEwgTp86Z36yRnLFwiiNDtGVWZiX_nfGJQ',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnRwdms2dmdzcGgyYzV4cXJhbmR6M2s1bnVpa2ZucnBwaWRoMHY4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ti77ZY8Ivj4PVFl6em/giphy.gif","text":"Sintiendome sola"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error =>{ throw new Error('json error') })
            .then(body => {
                const {error, message} = body

                throw new Error(message)
            })
    })
    .then(() => console.log('post created'))
    .catch(error => console.error(error))