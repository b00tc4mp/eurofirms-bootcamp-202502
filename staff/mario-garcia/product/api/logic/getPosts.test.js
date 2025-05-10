import { getPosts } from './getPosts.js'
try {

    const posts = getPosts('user-1')

    console.log('posts gotten', posts)

} catch (error) {
    console.log(error)
}
