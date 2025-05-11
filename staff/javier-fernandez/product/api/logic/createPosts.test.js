import { createPost } from './createPost.js'

try {
    createPost('user-2', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif', 'pin8 dancing')

    console.log('post created')
} catch (error) {
    console.error(error)
}
