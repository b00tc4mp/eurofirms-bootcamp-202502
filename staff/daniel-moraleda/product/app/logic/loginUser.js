import { data } from '../data'
import {validate, SystemError, errors } from 'com'

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    validate.username(username)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL + '/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            //const status = response.status
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

                throw new constructor(mesage)
                })
        })

}