import { User } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError } from './errors.js'

/**
 * RETORNAMOS el Username del Usuario encontrado con UserId
 * 
 * @param {string} userId The user id.
 * 
 */

export const getUserUsername = userId => {

    if (typeof userId !== 'string') throw new ValidationError('Invalid userId type')
    if (userId.length !== 24) throw new ValidationError('Invalid userId length')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return user.username
        })
}