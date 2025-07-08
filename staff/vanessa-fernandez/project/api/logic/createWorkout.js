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

    // comprobamos duplicados en los datos de entrada, si hay exerciseId duplicado en el array
    for (let i = 0; i < exercises.length; i++) {
        for (let j = i + 1; j < exercises.length; j++) {
            if (exercises[i].exerciseId === exercises[j].exerciseId)
                throw new DuplicityError('duplicate exercise in input')
        }
    }

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return Workout.findOne({ userId, day })
                .catch(error => { throw new SystemError('mongo error')})
                .then(existingWorkout => {
                    if(existingWorkout) {
                        for (const newExercise of exercises){
                            for (const existingExercise of existingWorkout.exercises) {
                                if (newExercise.exerciseId === existingExercise.exerciseId.toString()) {
                                    throw new DuplicityError('exercise already exists in workout for this day')
                                }
                            }
                        }    
                    }
                    const checks = exercises.map(({ exerciseId }) => {
                        return Exercise.findById(exerciseId)
                            .catch(error => { throw new SystemError('mongo error') })
                            .then(exercise => {
                                if (!exercise) throw new NotFoundError('exercise not found')
                            })
                    })
                    return Promise.all(checks)
                })    
                .then(() => {
                    return Workout.create({
                        userId,
                        day,
                        exercises
                    })
                })
                /*.catch(error => { throw new SystemError('mongo error')}) si mantengo este catch en vez de saltar el error de duplicityError con la rutina para ese dia me salta este catch*/ 
        })

}