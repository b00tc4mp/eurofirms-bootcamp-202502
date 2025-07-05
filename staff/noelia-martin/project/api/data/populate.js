import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        // return User.create({
        //     username: 'pepemoleroguzman',
        //     password: '123123123',
        //     name: 'Pepe Molero Guzman',
        //     healthCareNumber: 'AN4582775699',
        //     dateOfBirth: '01/09/2022'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        return User.create({
            username: 'lucasmoleromartin',
            password: '123123123',
            name: 'Lucas Molero Martín',
            healthCareNumber: 'AN1782775639',
            dateOfBirth: '09/05/2022'
        })
            .catch(error => { throw new Error(error.message) })
            .then(() => console.log('user saved'))

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())