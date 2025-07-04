import mongoose from 'mongoose'
import { User } from './models.js'
import { Exercise } from './models.js'
import { Workout } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Exercise,
    Workout
}