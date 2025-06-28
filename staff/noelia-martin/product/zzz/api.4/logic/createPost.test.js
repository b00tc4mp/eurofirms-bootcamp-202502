import { createPost } from './createPost.js'
import { connect, disconnect } from '../data/index.js'


connect('mongodb://localhost:27017/test')
    .then(() => {
        return createPost('68396d30fe24a5b43ab3bcc3', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif', 'prueba desde test en logic')
            .then(() => console.log('posts created'))
            .catch(error => console.error(error))

    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())

// try {
//     createPost('user-1', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif', 'pin8 dancing')

//     console.log('post created')
// } catch (error) {
//     console.error(error)
// }