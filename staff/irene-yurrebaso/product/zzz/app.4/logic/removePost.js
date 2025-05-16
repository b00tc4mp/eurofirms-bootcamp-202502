import { data } from '../data'

/**
 * Removes a post.
 * 
 * @param {string} postId The post id.
 */

export const removePost = postId => {
    //validación de postId
    if (typeof postId !== 'string') throw new Error ('invalid postId typ')
    if (postId.length < 6) throw new Error ('invalid postId length')

    //me traigo la bbdd de posts
    const posts = data.getPosts()

    //devuelve el indice que ocupa en el array. Comprueba cual de los posts tiene el id igual que el postId del parametro
    const index = posts.findIndex(post => post.id === postId)

    if (index < 0) throw new Error('post not found')

    //en un array permite eliminar el objeto en el indice especificado
    posts.splice(index, 1)

    data.setPosts(posts)
}