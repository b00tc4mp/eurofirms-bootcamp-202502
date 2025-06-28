//en node en importaciones y exportaciones hay que poner extensiones(en vite no hacia falta, al igual que detectaba los index automaticamente, node no)
import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'

import { createPost } from './createPost.js'
import { getPosts } from './getPosts.js'
import { removePost } from './removePost.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUserUsername,

    createPost,
    getPosts,
    removePost
}