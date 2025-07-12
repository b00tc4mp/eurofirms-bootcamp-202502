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
        required: true,
        enum: ['regular', 'admin'],
        default: 'regular'
    }
})

const exercise = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },

    muscleGroup: {
        type: String,
        enum: ['shoulders', 'legs', 'back', 'arms', 'full-body']
    }
})

const workout = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },

    exercises: [{
        exerciseId: {
            type: ObjectId,
            ref: 'Exercise',
            required: true
        },
        sets: {
            type: Number,
            required: true
        },
        repetitions: {
            type: Number,
            required: true
        },
        restTime: {
            type: Number,
            required: true
        }
    }]
})

const User = model('User', user)
const Exercise = model('Exercise', exercise)
const Workout = model('WorkOut', workout)


export {
    User,
    Exercise,
    Workout
}