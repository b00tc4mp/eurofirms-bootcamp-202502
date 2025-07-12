import { data } from '../data'
import { SystemError, errors } from 'com'


export const removeWorkout = workoutId => {
    

    return fetch(import.meta.env.VITE_API_URL + '/workouts/' + workoutId, {
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

                    throw new constructor(message)
                })
        })
}