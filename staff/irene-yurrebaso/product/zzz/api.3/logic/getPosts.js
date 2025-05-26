import { data } from '../data/index.js'

/**
 * Returns post from database.
 * 
 * @param {string} userId The requester user id.
 * 
 * @returns {array} The posts from database.
 */
export const getPosts = userId => {
    //validate userId
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    //verify user exists by user id
    //if user not found throw error
    //if user exists return posts

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const posts = data.getPosts().toReversed()

    posts.forEach(post => {
        const authorId = post.author

        const user = users.find(user => user.id === authorId)

        const username = user.username

        post.author = username

        //saber si userId conectado es el autor del post 
        post.own = authorId === userId
    })

    return posts
}