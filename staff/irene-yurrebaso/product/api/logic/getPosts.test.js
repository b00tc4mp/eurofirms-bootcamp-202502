import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('6830cf525c2e4339ab6c4bd7')
                .then(() => console.log('posts gotten', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())