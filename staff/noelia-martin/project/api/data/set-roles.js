import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        return User.findById('686953956c4676014bb85fc6')
            .catch(error => { throw new Error(error.message) })
            .then(user => {
                user.role = 'doctor'

                return user.save()
                    .catch(error => { throw new Error(error.message) })
            })
            .then(() => console.log('roles set'))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())