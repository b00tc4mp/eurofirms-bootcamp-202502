import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test') //nos conectamos a la BD llamada test
    .then(() => {
        // const user = new User({
        //     name: 'David',
        //     email: 'da@vid.com',
        //     username: 'david',
        //     password: '123123123'
        // })
        // const user = new User({     //De uno en uno!!! 
        //     name: 'Pepa',
        //     email: 'pe@pa.com',
        //     username: 'pepa',
        //     password: '123123123'
        // })
        // return user.save() //save para guardar user en el modelo User
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        return User.create({
            name: 'Noelia',
            email: 'noe@lia.com',
            username: 'noelia',
            password: '123123123'
        })
            .catch(error => { throw new Error(error.message) })
            .then(() => console.log('user saved'))

        // return User.deleteOne({ _id: '6831950e3e85b2514b184eb3' }) //no hace falta poner ObjectId
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user deleted'))

        // return User.updateOne({ _id: '6831cf3f9d238eeb808f55fd' }, { $set: { password: '123456789' } })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user updated'))

        // return User.find({}) //aqui no hace falta indicar que es un array
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('users', users))

        // return Post.create({
        //     author: '6831d4351454c9f2df6aaa2f',
        //     image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnl5MXFva3h0bmUwZTI5M3l4b215cThiOW1tOXdlMGdlNzgydjV1ZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/duNowzaVje6Di3hnOu/giphy.gif',
        //     text: 'prueba primer post',  //los likes lo hace automatico
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post created'))

        // return Post.updateOne({ _id: '6831d5927a7a27163dcac223' }, { $set: { text: 'prueba de cambio de texto' } })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('Texto del post cambiado'))

        // return Post.deleteOne({ _id: '6831d7809c3c05e4887653c8' })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('Post deleted'))

        // return Post.find({ $and: [{ author: '6831950e3e85b2514b184eb3' }, { text: 'primer post' }] })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())