import { createPost } from './createPost.js'

try {
    createPost('user-2', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBpeWpiZTlzaWhsZTk5cnRlNzQxbTUxNGpqajQ4NnF0b3prZnY2ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KcRVkLMk67Nte/giphy.webp', 'la tripulacion')

    console.log('post created')
} catch (error) {
    console.error(error)
}

