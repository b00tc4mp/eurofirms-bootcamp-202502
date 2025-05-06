import { data } from '../data' 

/**
 * Get the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    const users = data.getUsers()

    let user

    for (let i = 0; i < users.length; i++) {
        const _users = users[i]

        if (_users.id === data.getUserId()) {
            user = _users

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

        return user.username
}