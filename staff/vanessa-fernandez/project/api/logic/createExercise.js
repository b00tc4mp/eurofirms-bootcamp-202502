import { Exercise } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const createExercise = (name, description, image, difficulty, muscleGroup) => {
    validate.name(name)
    validate.description(description)
    validate.image(image)
    validate.difficulty(difficulty)
    validate.muscleGroup(muscleGroup)

    return Exercise.findOne({ name })
        .catch(error => { throw new SystemError('mongo error')})
        .then(exercise => {
            if(exercise) throw new DuplicityError('exercise already exits')

            return Exercise.create({
                name,
                description,
                image,
                difficulty,
                muscleGroup
            })
        })

    
    .catch(error => { throw new SystemError('mongo error')})
    .then(() => {})
}
