import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const userFamily = new Schema({
    nameChild: {
        type: String,
        required: true
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

    healthCareNumber: {
        type: String,
        required: true,
        unique: true
    },

    dateOfBirth: {
        type: String,
        required: true,
    },
})

const userDoctor = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
})

const UserFamily = model('UserFamily', userFamily)
const UserDoctor = model('UserDoctor', userDoctor)

export {
    UserFamily,
    UserDoctor
}