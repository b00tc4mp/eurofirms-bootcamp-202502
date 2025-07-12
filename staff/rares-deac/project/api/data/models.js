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
        default : 'regular'
    }
})

const routine = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    }
})

const User = model('User', user)
const Routine = model('Routine', routine)

export {
    User,
    Routine
}