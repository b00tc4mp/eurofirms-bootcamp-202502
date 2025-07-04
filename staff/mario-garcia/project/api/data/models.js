import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['regular', 'admin'],
        required: true,
        default: 'regular'
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    doctor: {
        type: String,
        required: true
    },

    treatment: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },
})

const User = model('User', user)
const Post = model('Post', post)

export {
    User,
    Post
}