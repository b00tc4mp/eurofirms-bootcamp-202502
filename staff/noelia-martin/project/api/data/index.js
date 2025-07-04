import mongoose from 'mongoose'
import { UserFamily, UserDoctor } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    UserFamily,
    UserDoctor
}