import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
// import { getPosts } from './getPosts'
// import { createPost } from './createPost'
// import { removePost } from './removePost'

export const logic = {
    isUserLoggedIn,
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser
}