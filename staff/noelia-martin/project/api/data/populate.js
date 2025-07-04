// import mongoose from 'mongoose'
// import { UserFamily, UserDoctor } from './models.js'

// const { connect, disconnect } = mongoose

// connect('mongodb://localhost:27017/test-ChildHealtDocument')
//     .then(() => {
//         // return UserFamily.create({
//         //     nameChild: 'Lucas Molero Martín',
//         //     username: 'lucasmoleromartin',
//         //     password: '123123123',
//         //     healtCareNumber: 'AN1782775639',
//         //     dateOfBirth: '09/05/2022'
//         // })
//              .catch(error => { throw new Error(error.message) })
//              .then(() => console.log('user saved'))

//     })

//     .catch(error => console.error(error))
//     .finally(() => disconnect())
import mongoose from 'mongoose'
import { UserFamily, UserDoctor } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        // return UserFamily.create({
        //     nameChild: 'Pepe Molero Guzman',
        //     username: 'pepemoleroguzman',
        //     password: '123123123',
        //     healthCareNumber: 'AN4582775699',
        //     dateOfBirth: '01/09/2022'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        // return UserFamily.create({
        //     nameChild: 'Lucas Molero Martín',
        //     username: 'lucasmoleromartin',
        //     password: '123123123',
        //     healthCareNumber: 'AN1782775639',
        //     dateOfBirth: '09/05/2022'
        // })
        //     .catch(error => { throw new Error(error.message) })
        //     .then(() => console.log('user saved'))

        // return UserFamily.find({}) //aqui no hace falta indicar que es un array
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('UserFamily', users))

        return UserDoctor.create({
            username: 'lorenagomezperez',
            password: '123123123',
        })
            .catch(error => { throw new Error(error.message) })
            .then(() => console.log('user saved'))

        // return UserDoctor.find({}) //aqui no hace falta indicar que es un array
        //     .catch(error => { throw new Error(error.message) })
        //     .then(users => console.log('UserDoctor', users))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())