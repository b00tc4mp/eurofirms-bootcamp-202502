import { data } from '../data'
export const removePost = postId => {

    if (typeof postId !== 'string') throw new Error('Invalid postId type')
    if (postId.length < 6) throw new Error('Invalid postId length')

    const posts = data.getPosts()

    const index = posts.findIndex(post => post.id === postId)

    if (index < 0) throw new Error('Post not found')

    posts.splice(index, 1)

    data.setPosts(posts)
}