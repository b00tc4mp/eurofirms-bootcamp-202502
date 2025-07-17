import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { isUserAdministrator } from './isUserAdministrator'
import { getRoutines } from './getRoutines'
import { createRoutine } from './createRoutine'
import { updateRoutine } from './updateRoutine'
import { removeRoutine } from './removeRoutine'


export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    isUserAdministrator,

    getRoutines,
    createRoutine,
    updateRoutine,
    removeRoutine
}