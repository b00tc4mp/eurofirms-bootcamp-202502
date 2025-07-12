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

    // 1ª comprobamos duplicados en los datos de entrada, si hay exerciseId duplicado en el array exercises
    const duplicated = new Set()
    for (const { exerciseId } of exercises) {
        if (duplicated.has(exerciseId)) throw new DuplicityError('duplicate exercise in input')
        duplicated.add(exerciseId)    
    }
    //2ª buscar el usuario por userId
    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')
               
            //3ª comprobar si existe la rutina para ese usuario y dia    
            return Workout.findOne({ userId, day })
                .catch(error => { throw new SystemError('mongo error')})
                .then(existingWorkout => {
                    if(existingWorkout) {
                        const existingIds = existingWorkout.exercises.map(e => e.exerciseId.toString())
                        const hasDuplicate = exercises.some(e => existingIds.includes(e.exerciseId))
                        if(hasDuplicate) throw new DuplicityError('exercise already exists in workout for this day') 
                    }
                    // 4ª comprobar que todos los exerciseId existen en la base de datos
                    const checks = exercises.map(({ exerciseId }) => {
                        return Exercise.findById(exerciseId)
                            .catch(error => { throw new SystemError('mongo error') })
                            .then(exercise => {
                                if (!exercise) throw new NotFoundError('exercise not found')
                            })
                    })
                    // retorna todas las promesas porque el map anterior nos devuelve una promise por cada ejercicio
                    return Promise.all(checks)
                })    
                .then(() => {
                    return Workout.create({
                        userId,
                        day,
                        exercises
                    })
                    .catch(error => { throw new SystemError('mongo error') })
                    .then((workout) => {
                        workout.id = workout._id.toString()
                        delete workout._id
                        delete workout.__v

                        return workout
                    })
                })      
        })
}