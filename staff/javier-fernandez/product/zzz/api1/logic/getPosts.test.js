import { connect, disconnect } from '../data/'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('6831b86a5720869731588dfd')
            .then(posts => console.log('posts', posts))
            .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())