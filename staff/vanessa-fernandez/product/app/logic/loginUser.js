import { data } from '../data'

/**
 * Logs a user in the system
 * @param {string} username The user username.
 * @param {string} password The user password.
 */

// function loginUser(username,password)
// const loginUser = function (username, password){}
export function loginUser(username, password) {
    if (!username) throw new Error('You must fill the username  field.')
    if (typeof username !== 'string') throw new Error('Invalid type of username.')
    if (username.length < 3) throw new Error('Invalid username min length.')
    if (username.length > 20) throw new Error('Invalid username max length.')

    if (!password) throw new Error('You must fill the password field.')
    if (typeof password !== 'string') throw new Error('Invalid type of password.')
    if (password.length < 8) throw new Error('Invalid password min lenght.')
    if (password.length > 20) throw new Error('Invalid password max length.')

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new Error('Connection error')})
        .then(response => {
            const { status } = response

            if(status === 200) 
                return response.json()
                    .catch(error => { throw new Error('json error')})
                    .then(userId => data.setUserId(userId))

            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })        
        })

}