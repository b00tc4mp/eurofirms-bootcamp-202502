import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {
        // const user = new User({
        //     name: 'A Kira',
        //     email: 'a@kira.com',
        //     username: 'akira',
        //     password: '123123123'
        // })

        // const user = new User({
        //     name: 'Don Atello',
        //     email: 'don@atello.com',
        //     username: 'donatello2',
        //     password: '123123123'
        // })

        // return User.create({
        //     name: 'Michel Angelo',
        //     email: 'michel@angelo.com',
        //     username: 'michelangelo',
        //     password: '123123123'
        // })

        //     .catch(error => { throw new Error (error.message) })
        //     .then(() => console.log('user created'))

        // return user.save()
        //     .catch(error => { throw new Error(error.message)})
        //     .then(() => console.log('user saved'))

        // return User.deleteOne({ _id: '683729cc90f9de7de6039b29'})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user deleted'))

        // return User.updateOne({ _id: '683728b4cf76e765bb2d9f73'}, { $set: { password: '345345345' } })
        //     .catch(error => { throw new Error(error.message)})
        //     .then(() => console.log('user updated'))

        // return User.find({})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('users', users))

        // return Post.create({
        //     author: '683731bae91ef6588f92bdcf',
        //     image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRrZ3RmMjRhNGF2OXJxM3E0anJiYWIxYm5reHVkd2d4N3JwYm52eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dr7KG0sFSXaYAwg94d/giphy.gif',
        //     text: 'La tortuga covadonga'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post created'))

        // return Post.deleteOne({ _id: '683733b93511f831bbcf479a'})
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('post deleted'))

        return Post.find({})
            .catch(error => { throw new Error(error.message) })
            .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())