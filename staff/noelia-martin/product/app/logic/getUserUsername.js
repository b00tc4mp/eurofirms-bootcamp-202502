import { data } from '../data'

//creo una funcion para conseguir el nombre del usuario

/**
 * Gets the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    return fetch('http://localhost:8080/users/self/username', {
        method: 'GET',
        headers: {
            //Authorization: 'Basic user-10'
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