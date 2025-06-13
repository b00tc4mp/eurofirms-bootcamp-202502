import mongoose from 'mongoose'

const { Schema, model } = mongoose //schema: esquema, estructura: model: funcion que permite crear modelos

const { Types } = Schema
const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true //obligatorio su introduccion
    },
    email: {
        type: String,
        required: true,
        unique: true //no se puede repetir, un usuario no puede tener el email de otro
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
        ref: 'User', //indicamos que se refiere a un id de un usuario
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
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

const User = model('User', user)
const Post = model('Post', post)

export { User, Post }