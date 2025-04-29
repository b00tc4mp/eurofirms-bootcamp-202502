import { data } from '../data'


/**
 * Creates a post
 * 
 * @param {string} image The post image url. 
 * @param {string} text The post text.
 */

export const createPost = (image, text) => {
    if (!text) throw new Error('You must provide text.')
    if (typeof text !== 'string') throw new Error('Invalid text type.')
    if (text.length < 1) throw new Error('Invalid text min length.')
    if (text.length > 250) throw new Error('Invalid text max length.')


    if(image !== 'string') throw new Error('Invalid image type.')    
    if(!image.startsWith('http')) throw new Error('Invalid image format.')    
    if (!image) throw new Error('You must provide an image.')

    let postsCount = data.getPostsCount()
    
    postsCount++

    const post = {
        id:'post-' + postsCount,
        author: data.getUserId(),
        image,
        text,
        date: new Date().toISOString(),
        likes:[]
    }

    const posts = data.getPosts()

    posts.push(post)

    data.setPosts(posts)
    data.setPostsCount(postsCount)
    
}