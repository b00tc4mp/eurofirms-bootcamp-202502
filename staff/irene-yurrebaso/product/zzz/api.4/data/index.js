import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

//lo exportamos todo desde index.js para que sea mas fácil de usar desde cualquier lógica
export {
    connect,
    disconnect,

    User,
    Post
}