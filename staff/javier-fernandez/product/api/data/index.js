import mongoose from 'mongoose'
import { User, Post } from './mdels.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Post
}