import { User, Post } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError } from './errors.js'

/**
 * Returns post from database.
 * 
 * @param { string } userId The requester user id.
 * 
 * @returns { array } The posts from database.
 */
export const getPosts = userId => {
    //validate userId
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    if (userId.length !== 24) throw new ValidationError('invalid userId length')

    //verificar con userId que el usuario existe
    //si usuario no encontrado lanzar error
    //si usuario existe retornar posts
    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            
            //devuelve posts con propiedades especificas: excepto version __v, del autor la propiedad username, ordenar por fecha mas reciente, objeto mutable con .lean().
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

                        //dará true o false
                        post.own = post.author.id === userId
                    })

                    return posts
                })
        })
}