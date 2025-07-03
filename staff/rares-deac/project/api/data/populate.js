import mongoose from 'mongoose'
import { User} from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())