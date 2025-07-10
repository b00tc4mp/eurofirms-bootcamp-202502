import { data } from '../data'
import { validate, SystemError, errors } from 'com'

export const createExercise = (name, description, image, difficulty, muscleGroup) => {
    validate.name(name)
    validate.description(description)
    validate.image(image)
    validate.difficulty(difficulty)
    validate.muscleGroup(muscleGroup)

    return fetch(import.meta.env.VITE_API_URL + '/exercises', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({ name, description, image, difficulty, muscleGroup })
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