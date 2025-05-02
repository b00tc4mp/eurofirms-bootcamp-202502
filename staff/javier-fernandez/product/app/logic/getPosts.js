import { data } from '../data'

/**
 * Gets all posts users in the system.
 * 
 * @returns {[{
 * id: string,
 * author: string,
 * image: string,
 * text: string,
 * date: Date
 * }]} The posts from users in the system.
 */
export const getPosts = () => 

    const posts = data.getPosts().toReversed()

    const users = data.getPosts()

    const userId = data.getUserId()

    posts.forEach (post =>
        const authorId = post.author
        
        const user = users.find(user => User.id === authorId)

        const username = user.username

        post.author = username

        post.own = authorId === userId
    )