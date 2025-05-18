import { data } from '../data/index.js'
/**
 * DEVUELVE los Posts de la BB.DD.
 * 
 * @param {string} userId Solicitamos el User id.
 * 
 * @returns {array} Los posts desde la BB.DD.
 */

export const getPosts = userId => {

    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    // VERIFICAMOS que el Usuario existe por User Id.
    // NO Encontramos Usuario LANZAMOS ERROR.
    // SI Encontramos Usuario DEVOLVEMOS los POSTS.

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const posts = data.getPosts().toReversed()

    posts.forEach(post => {

        const authorId = post.author

        const user = users.find(user => user.id === authorId)

        const username = user.username

        post.author = username

        post.own = authorId === userId

    })

    return posts
}