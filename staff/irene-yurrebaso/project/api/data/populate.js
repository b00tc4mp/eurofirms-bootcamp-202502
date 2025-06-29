import mongoose from "mongoose"
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return User.create({
            username: 'pepitapulgarcita',
            email: 'pepita@pulgarcita.com',
            password: '123123123'
        })
    }
    )
    .catch(error => console.error(error))
    .finally(() => disconnect())