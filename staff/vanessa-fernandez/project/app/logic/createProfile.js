import { data } from '../data'
import { validate, SystemError, errors } from 'com'

export const createProfile = (gender, weight, height) => {
    validate.gender(gender)
    validate.weight(weight)
    validate.height(height)

    return fetch(import.meta.env.VITE_API_URL + '/users/profile', {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gender, weight, height })
    })
        .catch(error => { throw new SystemError('Connection error')})
        .then(response => {
            const { status } = response

            if(status === 200) return

            return response.json()
                .catch(error => { throw new SystemError('json error')})
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}