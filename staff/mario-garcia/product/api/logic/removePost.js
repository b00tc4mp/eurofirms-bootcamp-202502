import { User, Post } from '../data/index.js'

/**
 * ELIMINAMOS un Post de la BB.DD.
 * 
 * @param {string} userId The requester user id.
 * @param {string} postId The post id to remove.
 */

export const removePost = (userId, postId) => {

    // VALIDAMOS el Usuario & el Post.

    if (typeof userId !== 'string') throw new Error('Invalid userId type')
    if (userId.length !== 24) throw new Error('Invalid userId length')

    if (typeof postId !== 'string') throw new Error('Invalid post type')
    if (postId.length !== 24) throw new Error('Invalid postId length')

    return User.findById(userId)
        .catch(error => { throw new Error(error) })
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