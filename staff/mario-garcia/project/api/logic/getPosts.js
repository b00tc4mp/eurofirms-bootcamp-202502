import { User, Post } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * RETURNs the Posts of the DataBase
 * 
 * @param { string } userId REQUEST the UserId
 * 
 * @returns { array } The posts from DataBase
 */

export const getPosts = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.find({}).select('-_v').populate('author', 'username').sort('-date').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(posts => {

                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (!post.author) throw new AuthorshipError('post has not author')

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