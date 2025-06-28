import { data } from '../data'


//creo una funcion que recoge de la base de datos todos los post y los devuelve, pero en estado inverso ya que normalmente los post deben ir de mas actual a menos

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
export const getPosts = () => {
    //cambio data.posts por data.getPosts(), ya que los posts los tengo en localStorage y ese el metodo configurado para obtenerlos
    return data.getPosts().toReversed()
}