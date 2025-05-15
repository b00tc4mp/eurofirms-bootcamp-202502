import { data } from '../data/index.js'

/**
 * Returns the username of the user to find by user id.
 * 
 * @param {string} userId The user id.
 * @returns {string} The username of the user.
 */

export const getUserUsername = userId => {
    if(typeof userId !== 'string') throw new Error ('Invalid userId type.')
    if(userId.length < 6) throw new Error('Invalid userId length.') 
    
    const users = data.getUsers()

    const user = users.find(user => user.id === userId)
    if(!user) throw new Error ('User not found.')

    return user.username    
}