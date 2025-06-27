import mongoose from 'mongoose'
import { User, Post } from './models.js'

const {connect, disconnect} = mongoose
export {connect, 
    disconnect,
    User,
    Post
}
