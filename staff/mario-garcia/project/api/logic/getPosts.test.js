import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {

        try {
            return getPosts('68599b4c1fede4cdec0ccf8b')
                .then(posts => console.log('posts', posts))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())