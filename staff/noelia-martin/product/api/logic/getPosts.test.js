import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('68396d30fe24a5b43ab3bcc3')
                .then(posts => console.log('posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())