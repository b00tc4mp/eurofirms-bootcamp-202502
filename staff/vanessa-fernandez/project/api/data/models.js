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
    
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: null
    },

    weight: {
        type: Number,
        default: null
    },

    height: {
        type: Number,
        default: null
    },

    profileCompleted: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        enum: ['regular', 'admin'],
        default: 'regular'
    }
})

const User = model('User', user)

export {
    User
}