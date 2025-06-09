import { data } from '../data'

// function loginUser(username, password) {
// const loginUser = function (username, password) {

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password  The user password.
 */
export const loginUser = (username, password) => {
    if (typeof username !== "string") throw new Error("invalid username type");

    if (typeof password !== "string") throw new Error("invalid password type");

    if (username.length < 1) throw new Error("invalid username min length");
    if (username.length > 30) throw new Error("invalid username max length");

    if (password.length < 8) throw new Error("invalid password min length");
    if (password.length > 30) throw new Error("invalid password max length");

    return fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
})
    .catch(error => {throw new Error ('connection error')})
    .then(response => {
        // const status = response.status
        const { status } = response

        if (status === 200) 
            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(token => data.setToken(token))

        return response.json()
            .catch(error => {throw new Error('json error')})
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })


}