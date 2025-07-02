import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'
import { createProfile } from './createProfile.js'
import { createExercise } from './createExercise.js'

export const logic = {
    registerUser, 
    authenticateUser,
    getUserUsername,
    createProfile,
    createExercise
}