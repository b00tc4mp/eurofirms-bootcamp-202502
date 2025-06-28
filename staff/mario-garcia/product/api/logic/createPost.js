import { User, Post } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * CREAR Post dentro de la BB.DD.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */

export const createPost = (userId, image, text) => {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.create({ author: userId, image, text })
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })
}