import { validate, SystemError, errors } from 'com'

/**
 * Registers a user in the system.
 * @param {string} username The user username.
 * @param {string} email The user e-mail.
 * @param {string} password The user password.
*/
export const registerUser = (username, email, password) => {
    validate.username(username)
    validate.email(email)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .catch(error => { throw new SystemError('connection error')})
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new SystemError('json error') })
            .then(body => {
                const { error, message } = body

                const constructor = errors[error] || SystemError

                throw new constructor(message)
            })
    })
}