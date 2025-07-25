import { data } from '../data'

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    //return fetch('http://localhost:8080/users/auth', {
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
                    .catch(error => { throw new Error('json error') })
                    //nuevo: modificamos setUserId(userId) por setToken(token) y userId de la funcion por token
                    .then(token => data.setToken(token))

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })

}
