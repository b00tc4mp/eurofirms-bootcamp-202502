import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return removePost('683de4444dcabbf91de96b83', '683de55eab8e8c231859f6f9')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())