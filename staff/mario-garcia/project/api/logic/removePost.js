import { User, Post } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * DELETE a Post from our Data Base
 * 
 * @param { string } userId The requester user Id.
 * @param { string } postId The post Id to delete.
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

                    if (user.role !== 'admin' && post.author.toString() !== userId) throw new AuthorshipError('user not author of post')

                    return Post.deleteOne({ _id: postId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}