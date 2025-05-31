import { User, Post } from '../data/index.js'

/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */
export const removePost = (userId, postId) => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    if (typeof postId !== 'string') throw new Error('invalid postId type')
    if (postId.length < 6) throw new Error('invalid postId length')

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')
            return Post.findById(postId)
                .catch(error => { throw new Error(error.message) })
                .then(post => {
                    if (!post) throw new Error('post not found')
                    if (post.author.toString() !== userId) throw new Error('user not owner of post')

                    return Post.deleteOne({ _id: postId })
                        .catch(error => { throw new Error(error.message) })
                        .then(() => { })
                })
        })
}