import { connect, disconnect } from '../data/index.js'

import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getPosts('6839edd18b0791c61e46de76')
            .then(posts => console.log('posts', posts))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())