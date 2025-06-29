import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {

        // return users.insertOne ({ name: 'Mu Lan', email: "mu@lan.com", username: "mulan", password: '123123123'})
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        // const user = new User({
        //     name: 'A Kira',
        //     email: 'a@kira.com',
        //     username: 'akira',
        //     password: '123123123'
        // })

        // const user1 = new User({
        //     name: 'Don Atello',
        //     email: 'don@atello2.com',
        //     username: 'donatello2',
        //     password: '123123123'
        // })

        // return user.save()
        //     .cath(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        // return User.create({
        //     name: 'Michel Angelo',
        //     email: 'michel@angelo.com',
        //     username: 'michelangelo',
        //     password: '123123123'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user created'))


        // return User.deleteOne({ _id: '6831cf829563f19594ec9f70' })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user deleted'))

        // return User.updateOne({ _id: '6831ce146076cb12868278b0' }, {
        //     $set: {
        //         password: '345345345'
        //     }
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user updated'))

        // return User.find({})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('users', users))

        // return Post.create({
        //     author: '6831d3f3ff95bad17f0303c0',
        //     image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBhbHlpbW01N2h0Y3h5M2l6ejljbndkZHlteDFyd2NjNWljenFycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SUPjsJSPpXloyRJSeW/giphy.gif',
        //     text: 'two fingers'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post created'))

        // return Post.deleteOne({ _id: '6831d5b645b5960060e009b6' })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post deleted'))

        return Post.find({})
            .catch(error => { throw new Error(error.message) })
            .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
