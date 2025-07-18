import { data } from '../data'
import { validate, SystemError, errors } from 'com'


export const updateRoutine = (routineId, title, description) => {
    validate.routineId(routineId)
    validate.title(title)
    validate.description(description)

    return fetch(import.meta.env.VITE_API_URL + '/routines/' + routineId, {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, description})
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

                    throw new constructor(message)
                })
        })
}