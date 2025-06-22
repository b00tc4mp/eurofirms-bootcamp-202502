import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
   },
   
    email: {
        type: String,
        required: true,
        unique: true
   },

   password: {
        type: String,
        required: true
   }
})

const User = model('User', user)

export {
    User
}