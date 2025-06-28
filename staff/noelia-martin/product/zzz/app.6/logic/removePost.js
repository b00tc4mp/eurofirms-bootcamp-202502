import { data } from '../data'

/**
 * Removes a post.
 * 
 * @param {string} postId The post id.
 */
export const removePost = postId => {
    //creamos varias validaciones
    if (typeof postId !== 'string') throw new Error('invalid postId type')
    if (postId.length < 6) throw new Error('invalid postId length')

    //traemos una copia de los posts existentes en nuestra BD
    const posts = data.getPosts()

    //localizamos el post que deseo borrar; necesitamos para ello la propiedad postId que se le habra pasado en la llamada a esta logica; una vez localizada nos devuelve su index(su posicion)
    const index = posts.findIndex(post => post.id === postId)

    //otra validación, si no encuentra ninguna posicion de nuestro post, nos avisara
    if (index < 0) throw new Error('post not found')

    //con splice el decimos que borre de esa posicion un elemento; es decir que quite ese post
    posts.splice(index, 1)

    //guardamos estos cambios en LocalStorage
    data.setPosts(posts)
}