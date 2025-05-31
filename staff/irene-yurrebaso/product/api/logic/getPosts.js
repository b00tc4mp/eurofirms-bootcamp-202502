import { User, Post } from '../data/index.js'

/**
 * Returns post from database.
 * 
 * @param { string } userId The requester user id.
 * 
 * @returns { array } The posts from database.
 */
export const getPosts = userId => {
    //validate userId
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length !== 24) throw new Error('invalid userId length')

    //verificar con userId que el usuario existe
    //si usuario no encontrado lanzar error
    //si usuario existe retornar posts

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

                        //dará true o false
                        post.own = post.author.id === userId
                    })

                    return posts
                })
        })

}