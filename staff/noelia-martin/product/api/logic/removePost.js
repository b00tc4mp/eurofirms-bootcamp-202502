import { User, Post } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
    validate.userId(userId)
    validate.postId(postId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Post.findById(postId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(post => {
                    if (!post) throw new NotFoundError('post not found')
                    if (post.author.toString() !== userId) throw new AuthorshipError('user not owner of post')

                    return Post.deleteOne({ _id: postId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}