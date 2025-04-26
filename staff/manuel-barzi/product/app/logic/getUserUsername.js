import { data } from '../data'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.id === data.getUserId()) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    return user.username
}