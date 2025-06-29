fetch('http://localhost:8080/posts/6853054ca80f50c838fc285d', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODQ5ZDdiMTgxOTZlMDJiZDhmYThlMzMiLCJpYXQiOjE3NDk2Njk5MjJ9.ogrKYdmcNEEwgTp86Z36yRnLFwiiNDtGVWZiX_nfGJQ'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 204) return

        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('post removed'))
    .catch(error => console.error(error))