import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { createProfile } from './createProfile'

export const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserUsername,
    logoutUser,
    createProfile
}