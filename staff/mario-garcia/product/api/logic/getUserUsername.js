import { User } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * RETORNAMOS el Username del Usuario encontrado con UserId
 * 
 * @param {string} userId The user id.
 * 
 */

export const getUserUsername = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return user.username
        })
}