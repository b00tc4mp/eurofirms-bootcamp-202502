import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image  The post image url.
 * @param {string} text The post text.
 */

export const createPost = (image, text) => {
    //validar datos
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    //crear el post: un objeto correlativo con lo que hay en la bbdd
    //traemos una copia del postsCount
    let postsCount = data.getPostsCount()

    postsCount++

    //creamos post (lo almacena en memoria)
    const post = {
        id: 'post-' + postsCount,
        author: data.getUserId(),
        date: new Date().toISOString(),
        image,
        text,
        likes: []
    }

    //guardamos post en la bbdd
    //primero, traer array de la bbdd
    const posts = data.getPosts()

    //despues, insertar post nuevo
    posts.push(post)

    //finalmente, guardar post y contador en JSON en la bbdd
    data.setPosts(posts)
    data.setPostsCount(postsCount)
}