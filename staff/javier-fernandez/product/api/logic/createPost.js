import { User, Post } from '../data/index.js'
 
/**
 * Create a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    if (typeof userId !== 'string') throw new Error('invalid useId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    // verify user exists searching it by user id
    // if user not found then throw error
    // if user found then continue with create post

   return User.findById(userId)

        .catch(error => {throw new Error(error.message)}) 
        .then(user => {
        if (!user) throw new Error('user not found')

            return Post.create({author:userId, image, text})
                .catch(error => {throw new Error(error.message)})
                .then(() => {})
        })
}