import { User, Post } from '../data/index.js' //queremos solo User del fichero index de data
import { ValidationError, SystemError, NotFoundError, AuthorshipError } from './errors.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    if (userId.length == !24) throw new ValidationError('invalid userId length')

    if (typeof image !== 'string') throw new ValidationError('invalid image type')
    if (!image.startsWith('http')) throw new ValidationError('invalid image format')

    if (typeof text !== 'string') throw new ValidationError('invalid text type')
    if (text.length < 1) throw new ValidationError('invalid min text length')


    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.create({ author: userId, image, text }) //si hubieramos configurado el parametro de entrada con la palabra author nos ahorrariamos este pequeño renombramiento
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })

}

// antiguo
// const users = data.getUsers()
// const user = users.find(user => user.id === userId)
// if (!user) throw new Error('user not found')
// let postsCount = data.getPostsCount()
// postsCount++
// const post = {
//     id: 'post-' + postsCount,
//     author: user.id,
//     image,
//     text,
//     date: new Date().toISOString(),
//     likes: []
// }
// const posts = data.getPosts()
// posts.push(post)
// data.setPosts(posts)
// data.setPostsCount(postsCount)