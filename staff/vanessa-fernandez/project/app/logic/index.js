import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { isUserAdmin } from './isUserAdmin'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { getUsers } from './getUsers'

import { createProfile } from './createProfile'
import { createWorkout } from './createWorkout'
import { getWorkouts } from './getWorkouts'
import { getWorkoutForUser } from './getWorkoutForUser'
import { removeWorkout } from './removeWorkout'

import { createExercise } from './createExercise'
import { getExercises } from './getExercises'


export const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserUsername,
    logoutUser,
    createProfile,
    isUserAdmin,
    getUsers,

    createExercise,
    getExercises,
   
    createWorkout,
    getWorkouts,
    getWorkoutForUser,
    removeWorkout
   
}