import { data } from '../data/index.js'

/**
 * CREAR Post dentro de la BB.DD.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */

export const createPost = (userId, image, text) => {

    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    // VERIFICAMOS que el Usuario EXISTE buscando por User id
    // NO Encontramos el Usuario DEVOLVEMOS ERROR
    // SI Encontramos el Usuario CREAMOS POST

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('User not found')

    let postsCount = data.getPostsCount()

    postsCount++

    const post = {
        id: 'post-' + postsCount,
        author: user.id,
        image,
        text,
        date: new Date().toISOString(),
        likes: []
    }

    const posts = data.getPosts()

    posts.push(post)

    data.setPosts(posts)
    data.setPostsCount(postsCount)
}