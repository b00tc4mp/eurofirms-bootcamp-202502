import { User } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * Returns the username of the user to find by user id.
 * 
 * @param { string } userId The user id.
 */
export const getUserUsername = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
                
            return user.username
        })
}