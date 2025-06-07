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
    if(typeof userId !== 'string') throw new ValidationError ('Invalid userId type.')
    if(userId.length !== 24) throw new ValidationError ('Invalid userId length.')
        
    if (!text) throw new ValidationError ('You must provide text.')
    if (typeof text !== 'string') throw new ValidationError ('Invalid text type.')
    if (text.length < 1) throw new ValidationError ('Invalid text min length.')
    if (text.length > 250) throw new ValidationError ('Invalid text max length.')
        
    if (typeof image !== 'string') throw new ValidationError ('Invalid image type.')
    if (!image.startsWith('http')) throw new ValidationError ('Invalid image format.')
    if (!image) throw new ValidationError ('You must provide an image.')    
        
    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return Post.create({
                //author:user._id, esto si funciona seguro
                author: userId,
                image,
                text
            })    
        })
        .catch(error => { throw new SystemError('mongo error')})
        .then(() => { })
}