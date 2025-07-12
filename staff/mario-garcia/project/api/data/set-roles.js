import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {
        return User.findById('6871542c0a5728bb41b330fc')
            .catch(error => { throw new Error(error.message) })
            .then(user => {
                user.role = 'admin'

                return user.save()
                    .catch(error => { throw new Error(error.message) })
            })
            .then(() => console.log('roles set'))
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())