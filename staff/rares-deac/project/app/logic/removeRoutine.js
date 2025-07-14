import { data } from '../data'
import { validate, SystemError, errors } from 'com'

/**
 * Removes a routine.
 * 
 * @param {string} routineId the routine id.
 */
export const removeRoutine = routineId => {
    validate.routineId(routineId)

    return fetch(import.meta.nev.VITE_API_URL + '/routines/' + routineId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(error => {throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}