import mongoose from "mongoose"
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/infinity-travel')
    .then(() => {
        const user = new User({
            username: 'pepitapulgarcita',
            email: 'pepita@pulgarcita.com',
            password: '123123123'
        })
    }
    )
    .catch(error => console.error(error))
    .finally(() => disconnect())