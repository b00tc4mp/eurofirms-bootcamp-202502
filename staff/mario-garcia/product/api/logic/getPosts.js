import { User, Post } from '../data/index.js'
/**
 * DEVUELVE los Posts de la BB.DD.
 * 
 * @param {string} userId Solicitamos el User id.
 * 
 * @returns {array} Los posts desde la BB.DD.
 */

export const getPosts = userId => {

    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length !== 24) throw new Error('invalid userId length')

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.find({}).select('-_v').populate('author', 'username').sort('-date').lean()
                .catch(error => { throw new Error(error.message) })
                .then(posts => {

                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (post.author._id) {

                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        post.own = post.author.id === userId

                    })

                    return posts
                })
        })
}