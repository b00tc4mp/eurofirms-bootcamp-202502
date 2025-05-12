import { getPosts } from './getPosts.js'
try {
    const posts = getPosts('user-1')

    console.log('Posts gotten', posts)
} catch (error) {
    console.error(error)
}