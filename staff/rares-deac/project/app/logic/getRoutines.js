import { data } from '../data'
import { SystemError, errors } from 'com'

/**
 * Gets all routines from users in the system
 * 
 * @returns {[{
 * id: string,
 * author: string,
 * title: string,
 * description: string
 * }]} The routines from users in the system.
 */
export const getRoutines = () => {
    return fetch(import.meta.env.VITE_API_URL + '/routines', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(routines => routines)
            
            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}