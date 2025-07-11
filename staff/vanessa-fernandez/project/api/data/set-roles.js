import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-gymplan')

    .then(() => {
        return User.findById('687159abfda0699f7d6b6c75')
            .catch(error => { throw new Error (error.message) })
            .then(user => {
                user.role = 'admin'

                return user.save()
                    .catch(error => { throw new Error(error.message) })
            })
            .then(() => console.log('roles set'))
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())