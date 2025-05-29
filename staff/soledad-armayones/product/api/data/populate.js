import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {
        // const user = new User({
        //      name: 'A Kira',
        //      email: 'a@kira.com',
        //      username: 'akira',
        //      password: '123123123'
        // })

        // const user = new User ({
        //      name: 'Don Atello',
        //      email: 'don@atello.com',
        //      username:'donatello',
        //      password: '123123123'
        // })

        // return user.save()
        //      .catch(error => { throw new Error(error.message) })
        //      .then(() => console.log('user saved'))

        // return User.create({
        //      name: 'Michel Angelo',
        //      email: 'michel@angelo.com',
        //      username: 'michelangelo',
        //      password: '123123123'
        // }) 

        //      .catch(error => { throw new Error(error.message) })
        //      .then(() => console.log('user created'))

        // return User.deleteOne ({ id: '6838981304eeb15aefa788e0' })
        //      .catch(error => { throw new Erro(error.message) })
        //      .then(() => console.log('user deleted'))

        // return User.updateOne({ _id: '6838981304eeb15aefa788e0' }, { $set: { password: '345345345' } })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user updated'))

        // return User.find({})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('users', users))

        // return Post.create({
        //     author: '6838981304eeb15aefa788e0',
        //     image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzM3dDBmM2YydHdmNzE4MWFkbGgwd3J5cmR0NjV4eHpteHg2cDgzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFdHXXm5GhJsc/giphy.gif',
        //     text: 'Don Tello playing game Pure'
        // })

        // .catch(error => { throw new Error(error.message) })
        // .then(() => console.log('post created'))

        // return Post.deleteOne({ _id: '6838abf7d20479b82d492b0b'})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post deleted'))

        return Post.find({})
            .catch(error => { throw new Error(error.message) })
            .then(posts => console.log('posts', posts))

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())