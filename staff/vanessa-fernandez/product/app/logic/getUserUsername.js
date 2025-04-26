import { data } from '../data'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username. 
 */


const getUserUsername = () => {
    let user

    for(let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.id === data.getUserId() ) { //añadimos getUserId para traer el userId de forma correcta ahora con la new version
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('User not found.')

    return user.username

}