import { data } from '../data/index.js'

/**
 * ELIMINAMOS un Post de la BB.DD.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */


export const removePost = (userId, postId) => {

    // VALIDAMOS el Usuario & el Post.

    if (typeof userId !== 'string') throw new Error('Invalid userId type')
    if (userId.length < 6) throw new Error('Invalid userId length')

    if (typeof postId !== 'string') throw new Error('Invalid post type')
    if (postId.length < 6) throw new Error('Invalid postId length')

    // VERIFICAMOS que el Usuario EXISTE.

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('User not found')

    // VERIFICAMOS que el Post EXISTE.

    const posts = data.getPosts()

    const postIndex = posts.findIndex(post => post.id === postId)

    if (postIndex < 0) throw new Error('Post not found')

    // Debo TRAERME el Post.

    const post = posts[postIndex]

    // VALIDAR que el Usuario es el Dueño del Post.

    if (post.author !== userId) throw new Error('User is not author of post')

    // Si se CUMPLEN todas las Validaciones BORRAMOS el Post.

    posts.splice(postIndex, 1)

    // Guardamos nuestro listado de Post ACTUALIZADO en la BB.DD.

    data.setPosts(posts)

}