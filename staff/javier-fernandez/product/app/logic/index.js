import { registerUser } from './registerUser'
import { loginUser } from '.loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getPosts } from './getPosts'
import { createPost } from './createPost'

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    getPosts,
    createPost
}