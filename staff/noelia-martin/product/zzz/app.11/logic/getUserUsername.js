import { data } from '../data'
import { SystemError, errors } from 'com'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    return fetch(import.meta.env.VITE_API_URL + '/users/self/username', {
        method: 'GET',
        headers: {
            //Cambio Basic por Bearer y el metodo getUserId() por getToken()
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(username => username)

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    //throw new Error(message)
                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}