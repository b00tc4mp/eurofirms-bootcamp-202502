import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

//script interno para asignar a un usuario como administrador
connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return User.findById('68721a1885c279e6939bc8c7')
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