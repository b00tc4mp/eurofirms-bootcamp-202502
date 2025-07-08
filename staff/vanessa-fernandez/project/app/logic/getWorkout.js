import { data } from '../data'
import { validate, SystemError, errors } from 'com'

export const getWorkouts = (day) => {
    validate.day(day)

    return fetch(`${import.meta.env.VITE_API_URL}/workouts?day=${day}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        },
    })
        .catch(error => { throw new SystemError ('connection error')})
        .then(response => {
            const { status } = response

            if(status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error')})
                    .then(workout => workout)
            return response.json()
                .catch(error => { throw new SystemError('json error')})
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })        
        })
}