import { data } from '../data/index.js'

/**
 * Returns post from database
 * 
 * @param {string} userId The requester user id.
 * 
 * @return {array} The posts from database.
 */

export const getPosts = userId => {
    if(typeof userId !== 'string') throw new Error('invalid userId Type')
    if (userId.lenght <6) throw new Error('invalid userId lenght')

    // verify user exists by user id
    // if user not found throw erro
    //if users exists return posts

    const users = data.getUsers()

    const user= users.find(user => user.id ===userId)

    if (!user) throw new Error('user not found')

    const posts = data.getPosts().toReversed()

    posts.forEach(post =>  {
        const authorId = post.author

        const user = users.find(user => user.id === authorId)

        const username = user.username

        post.own = authorId === userId
    })

    return posts
}