import { data } from '../data'
import { validate, SystemError, errors } from 'com'

/**
 * Removes a place.
 * 
 * @param {string} placeId The place id.
 */

export const removePlace = placeId => {
    validate.placeId(placeId)

    return fetch(import.meta.env.VITE_API_URL + '/places/' + placeId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
    .catch(error => { throw new SystemError('connection error') })
    .then(response => {
        const { status } = response

        if (status === 204) return

        return response.json()
            .catch(error => { throw new SystemError('json error') })
            .then(body => {
                const { error, message } = body

                const constructor = errors[error] || SystemError

                throw new SystemError(message)
            })
    })
}