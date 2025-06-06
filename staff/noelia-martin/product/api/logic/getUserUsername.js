import { User } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError } from './errors.js'

/**
 * Returns the username of the user to find by user id.
 * 
 * @param {string} userId The user id.
 */
export const getUserUsername = userId => {
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
    //en mongo los id tienen 24 caracteres, cambiamos el 6 por el !==24
    if (userId.length !== 24) throw new ValidationError('invalid userId length')

    //const users = data.getUsers()
    //const user = users.find(user => user.id === userId)
    //if (!user) throw new Error('user not found')
    //return user.username

    //Hecho por mi
    // return User.findOne({ _id: userId })
    //     .catch(error => { throw new Error(error.message) })
    //     .then(id => {
    //         if (!id) throw new Error('userId not found')
    //         return id.username
    //     })

    //Hecho por Manu
    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return user.username
        })
}
//antiguo
// const users = data.getUsers()
// const user = users.find(user => user.id === userId)
// if (!user) throw new Error('user not found')
// return user.username