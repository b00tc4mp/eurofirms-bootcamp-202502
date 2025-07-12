import { data } from '../data'
import { validate, SystemError, errors } from 'com'

export const createWorkout = (userId, day, exercises) => {
    validate.userId(userId)
    validate.day(day)

    exercises.forEach(({ exerciseId, sets, repetitions, restTime }) => {
        validate.exerciseId(exerciseId)
        validate.sets(sets)
        validate.repetitions(repetitions)
        validate.restTime(restTime)
    })

    return fetch(import.meta.env.VITE_API_URL + '/workouts', {
        method:'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({ userId, day, exercises })
    })
        .catch(error => { throw new SystemError('connection error')})
        .then(response => {
            const { status } = response

            if(status === 201) return

            return response.json()
                .catch(error => { throw new SystemError('json error')})
                .then(body => {
                    const { error, message } = body
                    
                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}