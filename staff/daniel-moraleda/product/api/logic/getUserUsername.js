import { data } from '../data/index.js'

/**
 * Returns the username of the user to find by user id.
 * 
 * @param {string} userId The user id.
 */
export const getUserUsername = userId => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error ('invalid userId length')

    // search user with this userId
    // if user not found then throw error
    // if user found then return username

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    return user.username
}