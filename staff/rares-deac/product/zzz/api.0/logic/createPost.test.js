import { createPost } from './createPost.js'

try {
    createPost('user-2', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VhMjJuYndkOXgxMTV6a2NjbHMyeGU0OHdkcTd6NWFnc2t6c2h2NiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif', 'pepe geroma')

    console.log('post created')
} catch (error) {
    console.error(error)
}