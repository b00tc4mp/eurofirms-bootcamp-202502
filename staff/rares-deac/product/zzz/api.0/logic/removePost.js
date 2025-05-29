import { data } from '../data/index.js'

/**
 * 
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
    //  validate userId and postId
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    if (typeof postId !== 'string') throw new Error('invalid postId type')
    if (postId.lengh < 6) throw new Error('invalid postId length')



    // verify user exists by userId
    //if user not found then throw error
    //verify post exists by postId
    // if post not found then throw error
    //verify post belongs to user (user is author of post)
    //id post does not belong to user then throw error
    //otherwise, delete post from database

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const posts = data.getPosts()

    const postIndex = posts.findIndex(post => post.id === postId)

    if (postIndex < 0) throw new Error('post not found')

    const post = posts[postIndex]

    if (post.author !== userId) throw new Error('user is not author of post')

    posts.splice(postIndex, 1)

    data.setPosts(posts)

}