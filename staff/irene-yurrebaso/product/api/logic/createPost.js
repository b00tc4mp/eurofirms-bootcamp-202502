import { Post, User } from '../data/index.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    //validate inputs
    if (typeof userId !== 'string') throw new Error('invalid author type')
    if (userId.length !== 24) throw new Error('invalid author length')
    
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')
    
    return User.findById(userId)
        //lanzamos la promesa (asincrona)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')
            
            return Post.create({ author: userId, image, text })
        })
    
        .catch(error => { throw new Error(error.message) })
        .then(() => { })
}