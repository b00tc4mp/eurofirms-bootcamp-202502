
import { Workout } from '../data/index.js'
import { validate, NotFoundError, SystemError } from 'com'

export const getWorkoutForUser = (userId, day) => {
    validate.userId(userId)
    validate.day(day)

    return Workout.findOne({ userId, day })
        .populate('exercises.exerciseId') 
        .lean()
        .catch(error => { throw new SystemError('mongo error') })
        .then(workout => {
            if (!workout) throw new NotFoundError('workout not found')
            return workout
        })
}
