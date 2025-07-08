import mongoose from 'mongoose'
import { User, Post} from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {

        return Post.find({})
            .catch(error => { throw new Error(error.message) })
            .then(posts => console.log('posts', posts))

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())