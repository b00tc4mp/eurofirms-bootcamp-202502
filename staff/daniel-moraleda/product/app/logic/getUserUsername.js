import { data } from '../data'

/**
 * 
 * @returns {string} The user username
 */
export const getUserUsername = () => {
    const users = data.getUsers()

    let user

    for (let i = 0; i < users.length; i++) {
        const _user =  users[i]

        if(_user.id === data.getUserId()) {
            user = _user
        
        break
        }
    }
    if (user = undefined) throw new Error ('user not found')
}