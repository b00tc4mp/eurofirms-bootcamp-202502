fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODRjNDdjYzEyZGJiNjMwZWM2OGNhNDMiLCJpYXQiOjE3NDk4NDA2NjV9.NnyXyjdMztVMf-59oOeGO_KSJY-HbeLWl7n0ZCHEktU',  'Content-Type': 'application/json'
    },
    body: '{"image":https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3B3MWF2N2N0d3pmeGNnNTY4cjc5N2xuYXQxdHR4dnpwbjNqNThkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85gdhlpxVz8TjsTC/giphy.gif","text":"Pinocho nouse"}'
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