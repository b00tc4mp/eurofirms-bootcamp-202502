import { connect, disconnect } from '../data/index.js'
import { removePost } from '.removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return removePost('6831e7a7fd98fd111ae2800d')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())