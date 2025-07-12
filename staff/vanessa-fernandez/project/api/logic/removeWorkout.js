import { User, Workout } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

export const removeWorkout = (userId, workoutId) => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            if (user.role !== 'admin') throw new AuthorshipError('not allowed')
    

            return Workout.findById(workoutId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(workout => {
                    if (!workout) throw new NotFoundError('workout not found')

                    
                    return Workout.deleteOne({ _id: workoutId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}