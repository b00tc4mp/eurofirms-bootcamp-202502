import { connect, disconnect } from '../data/index.js'
import { getPosts } from './getPosts.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return getPosts('686cedebae501c877892f051')
                .then(posts => console.log('posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error) 
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())