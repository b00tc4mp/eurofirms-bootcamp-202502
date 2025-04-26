import { data } from '../data'

/**
 * Logs a user in the system
 * @param {string} username The user username.
 * @param {string} password The user password.
 */

// function loginUser(username,password)
// const loginUser = function (username, password){}
function loginUser(username, password) {
    if (!username) throw new Error('You must fill the username  field.')
    if (typeof username !== 'string') throw new Error('Invalid type of username.')
    if (username.length < 3) throw new Error('Invalid username min length.')
    if (username.length > 20) throw new Error('Invalid username max length.')

    if (!password) throw new Error('You must fill the password field.')
    if (typeof password !== 'string') throw new Error('Invalid type of password.')
    if (password.length < 8) throw new Error('Invalid password min lenght.')
    if (password.length > 20) throw new Error('Invalid password max length.')

    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]
        if (_user.username === username) {
            user = _user
            break
        }
    }

    if (user === undefined) throw new Error('User not found.')
    if (user.password !== password) throw new Error('Wrong credentials.')

    data.setUserId(user.id)    // modificamos esta línea para usar el metodo nuevo setUserId

}