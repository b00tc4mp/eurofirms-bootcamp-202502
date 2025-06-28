import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/test')
    .then(() => {

        try {
            return getPosts('68319629c3dda27fe7131b3f')
                .then(posts => console.log('posts', posts))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())