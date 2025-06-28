import { User, Post } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'


/**
 * Creates a post in database
 * 
 * @param {string} userId The user id.
 * @param {string} image The image url.
 * @param {string} text The post text. 
 */
export const createPost = (userId, image, text) => {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)
    
    return User.findById(userId)
        .catch(error => { throw new SystemError ('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return Post.create({ author: userId, image, text })
                .catch(error => { throw new SystemError ('mongo error') })
                .then(() => { })
        })
}