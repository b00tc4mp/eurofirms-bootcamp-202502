import { User, Post } from '../data/index.js'
import { Validate, SystemError, NotFoundError, AuthorshipError } from 'com'
/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The request user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
   Validate.userId(userId)
   Validate.postId(postId)
   

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