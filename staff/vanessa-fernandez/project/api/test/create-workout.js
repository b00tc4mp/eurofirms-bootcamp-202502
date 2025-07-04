fetch('http://localhost:8080/worksout', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-1',
        'Content-Type': 'application/json'
    },
    body: '{"day": "Tuesday","exercises": [{"exerciseId": "6867b1d9309354cdd9f8fa9a","sets": 3,"repetitions": 12,"restTime": 60},{"exerciseId": "6867b18dbc767db60e0425c2","sets": 2,"repetitions": 12,"restTime": 60}]}'
})
    .catch(error => { throw new Error ('Connection error')})
    .then(response => {
        const { status } = response

        if(status === 201) return

        return response.json()
            .catch(error => { throw new Error ('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(() => console.log('workout created'))
    .catch(error => console.error(error))