import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedln'
import { getPosts } from './getPosts'
import { createPost } from './createPost'
import { removePost } from './removePost'

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    getPosts,
    createPost,
    removePost
}