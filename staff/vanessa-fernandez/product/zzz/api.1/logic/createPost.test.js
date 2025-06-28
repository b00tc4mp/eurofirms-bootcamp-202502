import { createPost } from './createPost.js'

try {
    createPost('user-1', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2E5andvMnM0bjVyejNuNXgxN3FoY3VmMzF4MXllN2ZlYTlqMnhmcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPBZnaTaC92yA/giphy.gif', 'Hi I am Harry Potter')


    console.log('Post created')
} catch (error) {
    console.error(error)
}