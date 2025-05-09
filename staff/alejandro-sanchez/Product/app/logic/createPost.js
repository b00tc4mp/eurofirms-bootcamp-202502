import { data } from ' ../data'
/**
 * Create a post
 * @param {string} image The post image url.
 * @param {string} text The post text.      
 */
export const createPost = (image,text) => {
    if (typeof image !== 'string') throw new Error('invalid image type')
    if(!image.startsWith('http'))  throw new Error('invalid image format')
    
    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text lenght')

    let postsCount = data.getPostCount()  
    
    postsCount++

    const post = {
        id: 'post-' + postsCount,
        author: data.getUserId(),
        image,
        text,
        date: new Date().toISOString(),
        likes: []
    }

    const posts= data.getPosts()

    posts.push(post)

    data.setPosts(posts)
    data.setPostCount(postsCount)
}
