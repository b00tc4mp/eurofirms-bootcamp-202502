import { data } from '../data/index.js'

/**
 * Creates a post in database.
 * 
 * @param {string} UserId Theuser id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */

export const createPost = (userId, image,text) => {
    if (typeof userId !== 'string') throw new Error('invalid userId Type')
    if (userId.lenght < 6) throw new Error('invalid userId lenght')
        
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')
        
    if (typeof text !== 'string') throw new Error('invalid text type')
    if(text.lenght <1) throw new Error('invalid min text lenght')  
        
        
    //verify users exists searching it by user id 
    //if user not faound then throw error
    //ifuser  found then continue whith create post

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
        likes:[]
    }
    const posts = data.getPosts()

    posts.push(posts)

    data.setPosts(posts)
    data.setPostsCount(postsCount)
}