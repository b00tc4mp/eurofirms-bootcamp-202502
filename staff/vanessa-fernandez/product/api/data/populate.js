import mongoose from 'mongoose'
import { User, Post } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')

    .then(() => {
        // forma larga para crear usuario en bbdd
        //     const user = new User({
        //         name: 'Draco Malfoy',
        //         email: 'draco@malfoy.com',
        //         username: 'dracom'
        //     })
        //     return user.save()
        //         .catch(error => { throw new Error(error.message)})
        //         .then(() => console.log('user saved'))
        
        // forma más corta para crear usuario o lo que sea en bbdd, será la que usemos
        
        // return User.create({
        //     name:'Draco Malfoy',
        //     email:'draco@malfoy.com',
        //     username:'dracom',
        //     password:'789789789'
        // })
        //     .catch(error => { throw new Error(error.message)})
        //     .then(() => console.log('user created'))
       
        //borrar usuario
       
        // return User.deleteOne({ _id: '6832bedd1fbafd6ade21e8f1' })
        //     .catch(error => { throw new Error(error.message)})
        //     .then(() => console.log('user deleted'))
       
        //modificar usuario
       
        // return User.updateOne({ _id: '6832bc19affd088cc58e24b9' }, {$set:{password:'456456456'}})
        //     .catch(error => { throw new Error(error.message)})
        //     .then(() => console.log('user updated'))
        
        // listar usuario

        // return User.find({})
        //     .catch(error => { throw new Error(error.message)})
        //     .then((users) => console.log('users', users))

        //crear post

        return Post.create({
            author: '6831a68f74bba4476ab5b2c7',
            image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzkxemRiOWtjamwwY2pzcmczeXYzbTZwOGgyNnE1NWl5MTVuOGVzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HATwHWlQJxKfu/giphy.gif',
            text: 'The best day in Howgarts'
        })
            .catch(error => { throw new Error(error.message)})
            .then(() => console.log('post created'))
        // el resto de metodos creados para users se usarían igual para post o lo que sea.    
    })


    .catch(error => console.error(error))
    .finally(() => disconnect())
