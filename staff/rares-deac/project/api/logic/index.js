import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'

import { createRoutine } from './createRoutine.js'
import { getRoutines } from './getRoutines.js'
import { removeRoutine } from './removeRoutine.js'

export const logic = {
    registerUser,
    getUserUsername,
    authenticateUser,

    createRoutine,
    getRoutines,
    removeRoutine
}