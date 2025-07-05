import mongoose from 'mongoose'
import { User, Place, Review } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Place,
    Review
}