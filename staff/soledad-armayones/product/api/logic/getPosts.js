import { User, Post } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError } from './errors.js'

/**
 * Returns post from database.
 * 
 * @param {string} userId The requester user id.
 * 
 * @returns {array} The posts from database.
 */
export const getPosts = userId => {
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    if (userId.length !== 24) throw new ValidationError('invalid userId length')

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.find({}).select('-__v').populate('author', 'username').sort('-date').lean()
                .catch(error => { throw new SystemError('mongo error') })
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