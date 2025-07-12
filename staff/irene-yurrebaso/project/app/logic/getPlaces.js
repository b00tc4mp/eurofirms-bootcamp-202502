import { data } from '../data'
import { errors } from 'com'

const { SystemError } = errors

/**
 * @returns {[{
 * name: string,
 * city: string,
 * description: string,
 * image: string
 * }]} Key info from Places added in the system.
 */
export const getPlaces = () => {
    return fetch(import.meta.env.VITE_API_URL + '/places', {
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
                    .then(places => places)

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}