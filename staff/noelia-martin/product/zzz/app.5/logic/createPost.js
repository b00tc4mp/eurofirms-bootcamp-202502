import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (image, text) => {
    //ponemos algunas validaciones
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    let postsCount = data.getPostsCount() //recupera de LocalStorage la variable postsCount para poder trabajar con ella

    postsCount++

    const post = {
        id: 'post-' + postsCount,
        author: data.getUserId(),
        image, //es igual que image=image, javascript permite reducirlo a una sola palabra
        text,
        date: new Date().toISOString(),
        likes: []
    }

    const posts = data.getPosts() // recupera de LocalStorage el array posts

    posts.push(post) //añadimos a posts uno nuevo

    //añadimos la nueva variable y array a localstorage
    data.setPosts(posts)
    data.setPostsCount(postsCount)
}