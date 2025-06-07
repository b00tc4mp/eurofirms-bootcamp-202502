import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema //Schema tiene types
const { ObjectId } = Types //Types tiene ObjectId's, son como cajitas una dentro de otra

//usamos Schemas para definir datos, vamos a definir el Schema o estructura de un usuario
const user = new Schema({
    //tip: el Id lo crea automaticamente - ObjectId
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
        type: ObjectId, //tiene un Id asignado por mongo
        ref: 'User', //la propiedad author de un post, corresponde a un ObjectId de la colección User
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
        default: Date.now //funcion q tiene la constructora de fechas para crear fechas automaticamente
    },

    likes: [{
        //array de ObjectId, ya que aquí ponemos id's de usuario
        type: ObjectId,
        ref: 'User'
    }]
})

//creamos modelos de datos a partir de los Schemas
//en parámetro 1 pasamos el nombre en mayúscula & en parámetro 2 pasamos el schema para que sepa las propiedades q tiene
const User = model('User', user)
const Post = model('Post', post)

//exportamos los modelos para poder usarlos en cualquier otro fichero (ej. en populate.js para testear)
export {
    User,
    Post
}