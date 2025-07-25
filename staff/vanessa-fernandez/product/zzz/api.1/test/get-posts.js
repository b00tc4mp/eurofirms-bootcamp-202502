fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        Authorization: 'Basic user-1'
    },
})
    .catch(error => { throw new Error('Connection error')})
    .then(response => {
        const { status } = response

        if(status === 200)
            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(posts => posts)
               
        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })        
    })
    .then(posts => console.log('posts: ', posts))
    .catch(error => console.error(error))