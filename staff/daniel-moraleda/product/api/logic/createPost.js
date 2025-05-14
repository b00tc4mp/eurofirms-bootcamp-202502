import  { data } from '../data/index.js'

/**
 * Creates a post in database
 * 
 * @param {string} userId The user id.
 * @param {string} image the post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid uderId length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image. startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error ('invalid min text length')

    // verify users exists searching it by user id
    // if user not found then throw error
    // if user found then continue with create post

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    let postsCount = data.getPostsCount()

    postsCount++

    const post = {
        id: 'post-' + postsCount,
        author: user.id,
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