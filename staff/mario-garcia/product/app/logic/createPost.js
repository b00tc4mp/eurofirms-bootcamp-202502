import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image The image URL.
 * @param {string} text The post text. 
 */

export const createPost = (image, text) => {

    if (typeof image !== 'string') throw new Error('Invalid image type')

    if (!image.startsWith('http')) throw new Error('Invalid image format')

    if (typeof text !== 'string') throw new Error('Invalid text type')

    if (text.length < 1) throw new Error('Text length is NOT enough')

    let postsCount = data.getPostsCount()

    postsCount++

    const post = {

        id: 'post-' + postsCount,
        author: data.getUserId(),
        image,
        text,
        date: new Date().toISOString(),
        likes: []
    }

    const posts = data.getPosts()

    posts.push(post)

    data.setPosts(posts)

    data.setPostsCount(postsCount)
} 