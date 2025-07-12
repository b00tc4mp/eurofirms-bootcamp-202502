import { data } from '../data'

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    Validate.username(username)
    Validate.password(password)

 return fetch(import.meta.env.VITE_API_URL + '/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
 })  
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 200)
            return response.json()
                .catch(error => {throw new Error('json error') })
                .then(token => data.setToken(token))

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                const constructor = errors[error] || SystemError

                throw new Error(message)
            })
    })
}