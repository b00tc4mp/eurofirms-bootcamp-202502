import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

//conectar a: direccion, puerto y test
connect('mongodb://localhost:27017/test')
  .then(() => {
    //Construir un objeto de tipo User
    // const user = new User({
    //   name: 'A kira',
    //   email: 'a@kira.com',
    //   username: 'akira',
    //   password: '123123123'
    // })

    // return user.save()
    //   .catch(error => { throw new Error(error.message) })
    //   .then(() => console.log('user saved'))

    //Forma corta para crear y guardar usuario
    // return User.create({
    //   name: 'Don Atello',
    //   email: 'donatello@mail.com',
    //   username: 'donatello',
    //   password: '123123123'
    // })
    //   .catch(error => { throw new Error(error.message) })
    //   .then(() => console.log('user created'))

    //Borrar un usuario
    // return User.deleteOne({ _id: '68346cbdf358ddc2ef6647a5' })
    //   .catch(error => { throw new Error(error.message) })
    //   .then(() => console.log('user deleted'))

    //Actualizar una propiedad, ej. contraseña
    // return User.updateOne({ _id: '6831e05d367444bef8a27dc7'}, { $set: { password: '456456456'} })
    //   .catch(error => { throw new Error(error.message) })
    //   .then(() => console.log('user updated'))

    //Listar todos los usuarios. Se le pasa un objeto vacio.
    // return User.find({})
    //   .catch(error => { throw new Error(error.message) })
    //   .then(users => console.log('users', users))

    //Crear post.
    //fecha y likes los hace automaticamente.
    // return Post.create({
    //   author: '6831e05d367444bef8a27dc7',
    //   image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBhbHlpbW01N2h0Y3h5M2l6ejljbndkZHlteDFyd2NjNWljenFycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SUPjsJSPpXloyRJSeW/giphy.gif',
    //   text: 'high five'
    // })
    //   .catch(error => {throw new Error(error.message) })
    //   .then(posts => console.log('posts', posts))

    //Eliminar post
    // return Post.deleteOne({ _id: '683473352f5cbf909a3afc82' })
    //   .catch(error => {throw new Error(error.message) })
    //   .then(posts => console.log('post deleted'))

    //Listar posts
    return Post.find({})
      .catch(error => { throw new Error(error.messsage) })
      .then(posts => console.log('posts', posts))
  })

  .catch(error => console.error(error))
  .finally(() => disconnect())