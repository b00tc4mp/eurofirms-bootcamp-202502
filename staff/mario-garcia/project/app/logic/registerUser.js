import { validate, SystemError, errors } from 'com'

/**
 * Registers a USER in the system.
 * 
 * @param {string} name The User name.
 * @param {string} email email The User e-mail.
 * @param {string} username username The User username.
 * @param {string} password password The User password.
 */

export const registerUser = (name, email, username, password) => {

    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL + '/users', {//The REQUEST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'//TO INFORM -- The Content will be in JSON Format
        },
        body: JSON.stringify({ name, email, username, password })//I am creating the JSON
    })

        .catch(error => { throw new SystemError('connection error') })
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