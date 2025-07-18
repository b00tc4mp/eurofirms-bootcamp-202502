import mongoose from 'mongoose'
import { User, Child } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User, Child
}