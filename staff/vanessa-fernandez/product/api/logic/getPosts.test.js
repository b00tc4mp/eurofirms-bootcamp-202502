import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('6832c5beb3e33cbb45b5adbe')
            .then(posts => console.log('posts gotten', posts))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
.catch(error => console.error(error))
.finally(() => disconnect())

    console.log('Posts gotten', posts)

