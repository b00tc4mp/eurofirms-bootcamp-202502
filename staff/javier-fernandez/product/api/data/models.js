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
        required: true 
    },

    password: {
        type: String,
        required: true 
    }
})

const post = new Schema({
    author: {
        type: String,
        required: true 
    },

    image: {
        type: String,
        required: true 
    },

    text: {
        type: String,
        required: true 
    },

    date: {
        type: Date,
        required: true,
        default: Date.now 
    },

    likes: [{
        type: ObjectId,
        ref: 'user'
    }]
})

const User = model('User', user)
const Post = model('Post', post)

export {
    User,
    Post
}