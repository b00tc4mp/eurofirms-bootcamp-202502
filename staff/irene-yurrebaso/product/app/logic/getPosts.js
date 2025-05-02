import { data } from '../data'

/**
 * Gets all posts from users in the system.
 * 
 * @returns {[{
* id: string,
* author: string,
* image: string,
* text: string,
* date: Date}]} The posts from users in the system. 
*/

//logica que devuelve una copia de los posts que hay en bbdd, en un array por fecha invertida (mas nuevos primero)
export const getPosts = () => data.getPosts().toReversed()
