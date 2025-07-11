import { User } from '../data/index.js'
import { Validate, SystemError, NotFoundError } from 'com'

/**
 * Return the username of the user to find by user id.
 * 
 * @param {string} userId the user id.
 */
export const getUserUsername = userId => {
    Validate.userId(userId)

    // search user with this userId
    // if user not found then throw error
    // if user found then retuen username

   return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return user.username
        })
}