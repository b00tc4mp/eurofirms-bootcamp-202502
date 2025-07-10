import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { createProfile } from './createProfile'
import { createWorkout } from './createWorkout'
import { getWorkouts } from './getWorkouts'
import { createExercise } from './createExercise'

export const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserUsername,
    logoutUser,
    createProfile,
    createWorkout,
    getWorkouts,
    createExercise
}