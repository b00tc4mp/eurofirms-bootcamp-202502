import { User, Post } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError, AuthorshipError } from './errors.js'
/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The request user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    if (userId.length < 6) throw new ValidationError('invalid userId length')

    if (typeof postId !== 'string') throw new ValidationError('invalid postId type')
    if (postId.length < 6) throw new ValidationError('invalid postId length')

    // verify user exists by userId
    // if user not found then throw error
    //verify post exists by postId
    // if post not found belongs to user (user is athor of post)
    // if post does nos belong to user then throw error
    // otherwise, delete post from database

   return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.findById(postId)
                .catch(error => {  throw new SystemError(error.message) })
                .then(post => {
                    if (!post) throw new NotFoundError('post not found')

                    if (post.author.toString() !== userId)throw new AuthorshipError('user not owner of post')

                    return Post.deleteOne({ _id: postId })
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })
                })
        })
}