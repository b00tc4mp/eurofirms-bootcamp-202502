import { data } from '../data'

/**
 * Registers a USER in the system.
 * 
 * @param {string} name The User name.
 * @param {string} email email The User e-mail.
 * @param {string} username username The User username.
 * @param {string} password password The User password.
 */

export const registerUser = (name, email, username, password) => {

    if (typeof name !== 'string')
        throw new Error('Invalid name type')

    if (name.length < 1) throw new Error('Invalid name min. length')
    if (name.length > 30) throw new Error('Invalid name max. length')

    if (typeof email !== 'string')
        throw new Error('Invalid email type')

    if (email.length < 6) throw new Error('Invalid email min. length')
    if (email.length > 30) throw new Error('Invalid email max. length')

    if (typeof username !== 'string')
        throw new Error('Invalid username type')

    if (username.length < 3) throw new Error('Invalid username min. length')
    if (username.length > 20) throw new Error('Invalid username max. length')

    if (typeof password !== 'string')
        throw new Error('Invalid password type')

    if (password.length < 8) throw new Error('Invalid password min. length')
    if (password.length > 20) throw new Error('Invalid password max. length')

    return fetch(import.meta.env.VITE_API_URL + '/users', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, username, password })
    })

        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}