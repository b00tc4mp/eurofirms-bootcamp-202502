import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn} from './isUserLoggIn'
import { getPosts } from './getPosts'
import { createPost } from './cratePost'
import { createPosts } from '.removePost'

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


