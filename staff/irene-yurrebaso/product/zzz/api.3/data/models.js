import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema //Schema tiene types
const { ObjectId } = Types //Types tiene ObjectId's, son como cajitas una dentro de otra

const user = new Schema({
    name: {
        type: String, 
        required: true, //permite poner reglas de validacion
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
        required: true,
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
})

//modelizamos los Schemas
const User = model('User', user)
const Post = model('Post', post)

//exportamos los modelos para poder usarlos en cualquier otro fichero
export {
    User,
    Post
}