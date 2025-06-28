import { createPost } from './createPost.js'

try {
    createPost('user-3', 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVkMGNmZ3dhN2h4ajZ1bTZrMnYwMzBpczNvOW5kMTl2Y3lwajUxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9JKm2XcWXAIhvW/giphy.gif', ' bestis lanch breakfast')

    console.log('post created')
} catch (error) {
    console.error(error)
}