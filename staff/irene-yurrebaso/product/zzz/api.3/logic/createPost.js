import { data } from '../data/index.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    //validate inputs
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')
    
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    //verify user exists searching by user id
    //if user not found then throw error
    //if user found then continue with create post

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    let postsCount = data.getPostsCount()
    
    postsCount++
    
    //la api no tiene la informacion de sessionStorage de userId, hay que verificarlo cada vez con user.id
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