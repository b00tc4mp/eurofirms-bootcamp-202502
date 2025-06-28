import { data } from '../data'

/**
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
export const getPosts = () => data.getPosts().toReversed()