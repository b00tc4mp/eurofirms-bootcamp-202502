import { data } from '../data'

/**
 * Gets the User Username.
 * 
 * @returns {string} The user username.
 */

export const getUserUsername = () => {

    return fetch(import.meta.env.VITE_API_URL + '/users/self/username', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new Error('json error') })
                    .then(username => username)

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })

}