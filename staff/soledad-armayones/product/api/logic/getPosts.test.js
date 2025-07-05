import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('683c324d1449ccdee841aa89')
            .then(posts => console.log('posts', posts))
            .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})
.catch(error => console.error(error))
.finally(() => disconnect())