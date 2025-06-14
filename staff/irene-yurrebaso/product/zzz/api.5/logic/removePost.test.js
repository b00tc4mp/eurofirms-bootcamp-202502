import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            //userId y postId
            return removePost('6834a9a7afaf3e44fe405f1f', '6838adf74b5f299513877b80')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())