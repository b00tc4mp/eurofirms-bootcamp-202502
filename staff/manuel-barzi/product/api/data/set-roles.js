import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {
        return User.findById('6868ff77e3b930eff494a922')
            .catch(error => { throw new Error(error.message) })
            .then(user => {
                user.role = 'administrator'

                return user.save()
                    .catch(error => { throw new Error(error.message) })
            })
            .then(() => console.log('roles set'))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())