import { Post, User } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError } from './errors.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    if (typeof userId !== 'string') throw new ValidationError('invalid author type')
    if (userId.length !== 24) throw new ValidationError('invalid author length')
    
    if (typeof image !== 'string') throw new ValidationError('invalid image type')
    if (!image.startsWith('http')) throw new ValidationError('invalid image format')

    if (typeof text !== 'string') throw new ValidationError('invalid text type')
    if (text.length < 1) throw new ValidationError('invalid min text length')
    
    return User.findById(userId)
        //lanzamos la promesa (asincrona)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            
            return Post.create({ author: userId, image, text })
                .catch(error => { throw new SystemError(error.message) })
                .then(() => { })
        })
}