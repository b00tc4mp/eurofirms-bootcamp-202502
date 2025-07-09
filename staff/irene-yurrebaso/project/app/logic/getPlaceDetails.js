import { data } from '../data'
import { SystemError, errors } from 'com'

/**
 * @returns {
 * name: string,
 * category: string,
 * address: string,
 * city: string,
 * country: string,
 * description: string,
 * website: string,
 * telephone: string,
 * image: string,
 * reviews: string[]
 * }
 */
export const getPlaceDetails = (placeId) => {
    return fetch(import.meta.env.VITE_API_URL + '/places/' + placeId, {
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
                .then(place => place)

        return response.json()
            .catch(error => { throw new SystemError('json error') })
            .then(body => {
                const { error, message } = body

                const constructor = errors[error] || SystemError

                throw new constructor(message)
            })
    })
}