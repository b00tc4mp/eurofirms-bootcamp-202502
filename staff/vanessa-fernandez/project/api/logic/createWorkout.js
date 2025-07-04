import { Workout, User, Exercise } from '../data/index.js'
import { validate, SystemError, NotFoundError, DuplicityError } from 'com'

export const createWorkout = (userId, day, exercises) => {
    validate.userId(userId)
    validate.day(day)

    exercises.forEach(({ exerciseId, sets, repetitions, restTime }) => {
        validate.exerciseId(exerciseId)
        validate.sets(sets)
        validate.repetitions(repetitions)
        validate.restTime(restTime)
    })

    const seen = new Set()

    exercises.forEach(({ exerciseId }) => {
        if (seen.has(exerciseId)) throw new DuplicityError('duplicate exercise')
        seen.add(exerciseId)
    })

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            const exerciseChecks = exercises.map(({ exerciseId }) => {
                return Exercise.findById(exerciseId)
                    .catch(error => { throw new SystemError('mongo error')})
                    .then(exercise => {
                        if (!exercise) throw new NotFoundError('exercise not found')
                        return exercise    
                    })
            })  
            
            return Promise.all(exerciseChecks)
                .then(() => {
                    return Workout.create({
                        userId,
                        day,
                        exercises
                    })
                })
                .catch(error => { throw new SystemError('mongo error')})
        })

}