import { data } from '../data'

/**
 * Removes a post
 *   
 * @param {string} postId The post id
 */
export const removePost = postId => {
    if (typeof postId !== 'string') throw new Error('invalid postId type')
    if (postId.length < 6) throw new Error('invalid postId length')

        const posts = data.getPosts()

        const index = posts.findIndex(post => post.id === postId)

        posts.splice(index, 1)

        data.setPosts(posts)
}