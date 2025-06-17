import { Post, User } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)
    
    //user es el modelo que nos permite comunicarnos con la bbdd de usuarios
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