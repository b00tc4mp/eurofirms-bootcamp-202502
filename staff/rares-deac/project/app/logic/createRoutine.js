import { data } from '../data'
import { validate, SystemError, errors} from 'com'

/**
 * Creates a routine.
 * 
 * @param {string} title The routine title
 * @param {string} description The routine description.
 */
export const createRoutine = (title,description) => {
    validate.title(title)
    validate.description(description)

    return fetch(import.meta.env.VITE_API_URL + '/routines', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(), 'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}