import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {

        //CREAR un Usuario en 2 PASOS

        // const user = new User({
        //     name: 'Scott Summers',
        //     email: 'scottsummers@ciclope.com',
        //     username: 'ciclope',
        //     password: '123123123'
        // })

        // return user.save()
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        //CREAR un Usuario en 1 PASO

        return User.create({
            name: 'Bruce Banner',
            email: 'brucebanner@hulk.com',
            username: 'hulk',
            password: '123123123'
        })
            .catch(error => { throw new Error(error.message) })
            .then(() => console.log('user created'))

        //ELIMINAR un Usuario

        // return User.deleteOne({ _id: '6830ceb3f7ba90680e6c4bd7' })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user deleted'))

        //ACTUALIZAR un Usuario

        // return User.updateOne({ _id: '6831a30bd235ef34f479fb90' }, { $set: { name: 'Peter Benjamin Parker' } })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user updated'))

        //MOSTRAR LISTADO de Todos los Usuarios

        // return User.find({})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('users', users))

        //CREAR un POST

        // return Post.create({
        //     author: '683338c87dd64f2bee44d1f6',
        //     image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VoY3B4YWV5cXhoNjFjZ3M0cG54dGI1b3dzZjZ1c2d2b3R0end0cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41YuHALY8Zfa3OhO/giphy.gif',
        //     text: 'If you need me, I will be by your side'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post created'))

        //ELIMINAR un POST

        // return Post.deleteOne({ _id: '68333aa8c296833da30b9634' })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post deleted'))

        //ACTUALIZAR un Post

        // return Post.updateOne({ _id: '6831bfd2ca9110a140b13d3c' }, { $set: { text: 'If you work harshly you can be calm' } })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post updated'))

        //MOSTRAR LISTADO de Todos los Posts

        // return Post.find({})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())