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
*}]} The posts from users in the system. 
*/

//devuelve una copia de los posts que hay en bbdd, en un array por fecha invertida (mas nuevos primero)
export const getPosts = () => {
    const posts = data.getPosts().toReversed()

    //mostrar el username como autor del post publicado, en vez del user id
    const users = data.getUsers()
    //traigo userId para saber quien esta conectado y despues identificar si es autor del post
    const userId = data.getUserId()

    posts.forEach(post => {
        const authorId = post.author

        //devuelve el usuario que da true a la condicion
        const user = users.find(user => user.id === authorId)

        const username = user.username

        post.author = username

        //saber si userId conectado es el autor del post 
        post.own = authorId === userId
    })

    return posts
}
