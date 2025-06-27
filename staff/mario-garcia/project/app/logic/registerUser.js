import { validate, SystemError, errors } from 'com'

export const registerUser = (name, email, username, password) => {

    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, username, password })
    })

        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}