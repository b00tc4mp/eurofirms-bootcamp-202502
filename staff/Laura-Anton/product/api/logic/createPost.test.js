import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return createPost('683ca64482763a6ba3da5630', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif', 'pin8 dancing')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())