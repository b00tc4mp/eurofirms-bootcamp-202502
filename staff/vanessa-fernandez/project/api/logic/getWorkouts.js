import { User, Workout } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getWorkouts = (userId, day) => {
    validate.userId(userId)
    validate.day(day)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return Workout.findOne({ userId, day }).populate('exercises.exerciseId').lean()    
                .catch(error => { throw new SystemError('mongo error')})
                .then(workout => {
                    if(!workout) throw new NotFoundError('workout not found')
                    
                        return {
                            day: workout.day,
                            exercises: workout.exercises.map(({ sets, repetitions, restTime, exerciseId }) => {
                                return {
                                    name: exerciseId.name,
                                    description: exerciseId.description,
                                    image: exerciseId.image,
                                    difficulty: exerciseId.difficulty,
                                    muscleGroup: exerciseId.muscleGroup,
                                    sets,
                                    repetitions,
                                    restTime
                                }
                            })
                        }
                })
        })
}