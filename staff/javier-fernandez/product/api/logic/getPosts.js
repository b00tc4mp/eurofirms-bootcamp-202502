import { User, Post } from '../data/index.js'

/**
 * Returns post from database.
 * 
 * @param {string} userId The requester user id.
 * 
 * @returns {array} The posts from database.
 */
export const getPosts = userId => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    // verify user exists by user id
    // if user not found throw error
    // if user exists return posts

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.find({}).select('-__v').populate('author', 'username').sort('-date').lean()
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