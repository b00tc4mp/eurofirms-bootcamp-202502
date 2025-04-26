import { data } from '../data'

/**
 * Gets all posts from Users in the system.
 * @returns {[{
* id: string,
* author: string, 
* image: string, 
* text: string, 
* date: Date
* }]} The posts from Users in the system.
*/
export const getPosts = () => data.posts.toReversed()
