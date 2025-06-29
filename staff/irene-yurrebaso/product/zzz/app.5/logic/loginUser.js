import { data } from '../data'

/**
 * Logs a user in the system
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    //1. validar datos (ej. asegurarnos que son strings y dentro de longitud requerida)
    if(typeof username !== 'string') throw new Error('Invalid username')
    if(username.length < 3) throw new Error('Invalid min username length')
    if(username.length > 30) throw new Error('Invalid max username length')

    if(typeof password !== 'string') throw new Error('Invalid password type')
    if(password.length < 8) throw new Error('Invalid min password length')
    if(password.length > 20) throw new Error('Invalid max password length')
    
    return fetch('http://localhost:8080/users/auth', {
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
                    .then(userId => data.setUserId(userId))

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, messsage } = body

                    throw new Error(message)
                })
        })
}
