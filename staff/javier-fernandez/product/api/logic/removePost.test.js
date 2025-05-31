import { connect, disconnect } from '../data'
import { removePost } from './removePost.js'

connect('mongodb://localhost;27017/test')
    .then(() => {
        try {
            return removePost('6831b86a5720869731588dfd', '6830ca59d0976cd40d6c4bd0')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())