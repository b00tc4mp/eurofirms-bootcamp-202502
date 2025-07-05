import { data } from '../../data'
import { validate, SystemError, errors } from 'com'

export const loginUserFamily = (username, password) => {
    validate.username(username)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL + '/userFamily/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(token => data.setToken(token))

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })

}