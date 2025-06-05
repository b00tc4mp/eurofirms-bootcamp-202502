import { data } from '../data' 

/**
 * Get the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    return fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: {
            Authorization: 'Basic ' + data.getUserId()
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