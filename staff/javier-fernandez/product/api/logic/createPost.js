import { User, Post } from '../data/index.js'
 import { validate, SystemError, NotFoundError } from 'com'
/**
 * Create a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
   validate.userId(userId)
   validate.image(image)
   validate.text(text)

    // verify user exists searching it by user id
    // if user not found then throw error
    // if user found then continue with create post

   return User.findById(userId)

        .catch(error => {throw new SystemError('mongo error') }) 
        .then(user => {
        if (!user) throw new NotFoundError('user not found')

            return Post.create({author:userId, image, text})
                .catch(error => {throw new SystemError('mongo error')})
                .then(() => { })
        })
}