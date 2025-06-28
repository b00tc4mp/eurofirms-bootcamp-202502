import { data } from '../data/index.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */

export const createPost = (userId, image, text) => {
    if(typeof userId !== 'string') throw new Error ('Invalid userId type.')
    if(userId.length < 6) throw new Error ('Invalid userId length.')
        
    if (!text) throw new Error ('You must provide text.')
    if (typeof text !== 'string') throw new Error ('Invalid text type.')
    if (text.length < 1) throw new Error ('Invalid text min length.')
    if (text.length > 250) throw new Error ('Invalid text max length.')
        
    if (typeof image !== 'string') throw new Error ('Invalid image type.')
    if (!image.startsWith('http')) throw new Error ('Invalid image format.')
    if (!image) throw new Error ('You must provide an image.')    
        
    const users = data.getUsers()
    const user = users.find(user => user.id === userId)
    
    if(!user) throw new Error ('User not found.')
    
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