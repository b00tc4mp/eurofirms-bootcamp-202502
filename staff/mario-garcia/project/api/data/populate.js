import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {
        return User.create({
            name: 'Super Mario',
            email: 'super@mario.com',
            username: 'supermario',
            password: '123123123',
            role: 'admin'
        })

    })

    .catch(error => console.error(error))
    .finally(() => disconnect())