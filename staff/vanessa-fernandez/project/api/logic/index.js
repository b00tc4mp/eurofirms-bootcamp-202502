import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'
import { getUsers } from './getUsers.js'
import { createProfile } from './createProfile.js'
import { createExercise } from './createExercise.js'
import { getExercises } from './getExercises.js'
import { createWorkout } from './createWorkout.js'
import { getWorkouts } from './getWorkouts.js'
import { getWorkoutForUser } from './getWorkoutForUser.js'
import { removeWorkout } from './removeWorkout.js'

export const logic = {
    registerUser, 
    authenticateUser,
    getUserUsername,
    getUsers,
    createProfile,

    createExercise,
    getExercises,
    
    createWorkout,
    getWorkouts, 
    getWorkoutForUser,
    removeWorkout
}