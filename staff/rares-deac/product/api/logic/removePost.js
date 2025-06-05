import { User, Post } from '../data/index.js'
import { ValidationError,SystemError,NotFoundError,AuthorshipError } from './errors.js'

/**
 * 
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
    //  validate userId and postId
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    if (userId.length !== 24) throw new ValidationError('invalid userId length')

    if (typeof postId !== 'string') throw new ValidationError('invalid postId type')
    if (postId.length !== 24) throw new ValidationError('invalid postId length')



    // verify user exists by userId
    //if user not found then throw error
    //verify post exists by postId
    // if post not found then throw error
    //verify post belongs to user (user is author of post)
    //id post does not belong to user then throw error
    //otherwise, delete post from database

    return User.findById(userId)
        .catch(error => {throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

                return Post.findById(postId)
                .catch(error => { throw new SystemError ('mongo error') })
                .then(post => {
                    if (!post) throw new NotFoundError('post not found')
                    
                    if (post.author.toString() !== userId) throw new AuthorshipError('user not author of post')

                    return Post.deleteOne({ _id:postId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })

        })

}