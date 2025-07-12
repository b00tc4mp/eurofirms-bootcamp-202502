import mongoose from 'mongoose'
import { User, Routine } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect, 
    disconnect,

    User,
    Routine
}