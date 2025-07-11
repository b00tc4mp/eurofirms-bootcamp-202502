import { User, Post } from '../data/index.js'
import { Validate, SystemError, NotFoundError, AuthorshipError } from 'com'
/**
 * Returns post from database.
 * 
 * @param {string} userId The requester user id.
 * 
 * @returns {array} The posts from database.
 */
export const getPosts = userId => {
    Validate.userId(userId)
    
    // verify user exists by user id
    // if user not found throw error
    // if user exists return posts

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

                        if(!post.author) throw new AuthorshipError('post has not author')

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