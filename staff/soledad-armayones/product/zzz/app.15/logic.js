import { data } from './data'

/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name min length')
    if (name.length > 30) throw new Error('invalid name max length')

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email min length')
    if (email.length > 30) throw new Error('invalid email max length')

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    for (let i = 0; i < data.users.length; i++) {
        const user = data.users[i]

        if (user.email === email || user.username === username) throw new Error('user already exists')
    }

    data.usersCount++

    data.users.push({
        id: 'user-' + data.usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })
}

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')

    data.setUserId(user.id)
}

/**
 * Gets the user username.
 * 
 * @returns {string} The user username.
 */
const getUserUsername = () => {
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

/**
 * Logs a user out of the system.
 */
const logoutUser = () => {
    data.removeUserId()
}

/**
 * Gets whether user is logged in the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwise).
 */
const isUserLoggedIn = () => !!data.getUserId()

/**
 * Gets all posts from users in the system.
 * 
 * @returns {[{ 
 * id: string, 
 * author: string, 
 * image: string, 
 * text: string, 
 * date: Date 
 * }]} The posts from users in the system.
 */
const getPosts = () => {
    return data.posts.toReversed()
}

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    getPosts
}