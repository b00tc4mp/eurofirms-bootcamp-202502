import { data } from '../data'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username. 
 */


export const getUserUsername = () => {
    const users = data.getUsers()

    let user

    for(let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.id === data.getUserId() ) { //añadimos getUserId para traer el userId de forma correcta ahora con la new version
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('User not found.')

    return user.username

}