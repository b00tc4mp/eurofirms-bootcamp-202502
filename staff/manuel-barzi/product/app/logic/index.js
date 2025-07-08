import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { isUserAdministrator } from './isUserAdministraror'

import { getPosts } from './getPosts'
import { createPost } from './createPost'
import { removePost } from './removePost'

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    isUserAdministrator,

    getPosts,
    createPost,
    removePost
}