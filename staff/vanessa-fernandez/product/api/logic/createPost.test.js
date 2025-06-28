import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return createPost('6832c5beb3e33cbb45b5adbe', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2E5andvMnM0bjVyejNuNXgxN3FoY3VmMzF4MXllN2ZlYTlqMnhmcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPBZnaTaC92yA/giphy.gif', 'Hi I am Harry Potter again again')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())

