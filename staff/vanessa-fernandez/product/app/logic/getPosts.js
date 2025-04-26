import { data } from '../data'

/**
 * 
 * Gets all posts from users in the system.
 * 
 * @returns {[{
 * id: string,
 * author: string,
 * image: string,
 * text: string,
 * date: Date
 * }]} The posts from users in the system.
 */

const getPosts = () => {
    return data.posts.toReversed()
}