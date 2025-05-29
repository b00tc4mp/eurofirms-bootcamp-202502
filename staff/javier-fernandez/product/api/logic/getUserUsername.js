import { User } from '../data/index.js'

/**
 * Return the username of the user to find by user id.
 * 
 * @param {string} userId the user id.
 */
export const getUserUsername = userId => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    // search user with this userId
    // if user not found then throw error
    // if user found then retuen username

   return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if(!user) throw new Error('user not found')

            return user.username
        })
}