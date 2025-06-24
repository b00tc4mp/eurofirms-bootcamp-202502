fetch('http://localhost:8080/posts/6854560eb9a25bca517a4709', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODU0NTJhMWRjMDY4ZDJkNzU0NGNkZmMiLCJpYXQiOjE3NTA3MDE2OTF9.EK3tZiYOgXHLSsngF_Lxf8bdPWTawWSocAb_wkxDRkY'
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