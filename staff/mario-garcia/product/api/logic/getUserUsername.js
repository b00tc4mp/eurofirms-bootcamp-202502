import { User } from '../data/index.js'
/**
 * RETORNAMOS el Username del Usuario encontrado con UserId
 * 
 * @param {string} userId The user id.
 * 
 */

export const getUserUsername = userId => {

    if (typeof userId !== 'string') throw new Error('Invalid userId type')
    if (userId.length < 6) throw new Error('Invalid userId length')

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return user.username
        })
}