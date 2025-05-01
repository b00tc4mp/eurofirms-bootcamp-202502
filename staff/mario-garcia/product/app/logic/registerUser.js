import { data } from '../data'

/**
 * Registers a USER in the system.
 * 
 * @param {string} name The User name.
 * @param {string} email email The User e-mail.
 * @param {string} username username The User username.
 * @param {string} password password The User password.
 */

export const registerUser = (name, email, username, password) => {

    if (typeof name !== 'string')
        throw new Error('Invalid name type')

    if (name.length < 1) throw new Error('Invalid name min. length')
    if (name.length > 30) throw new Error('Invalid name max. length')

    if (typeof email !== 'string')
        throw new Error('Invalid email type')

    if (email.length < 6) throw new Error('Invalid email min. length')
    if (email.length > 30) throw new Error('Invalid email max. length')

    if (typeof username !== 'string')
        throw new Error('Invalid username type')

    if (username.length < 3) throw new Error('Invalid username min. length')
    if (username.length > 20) throw new Error('Invalid username max. length')

    if (typeof password !== 'string')
        throw new Error('Invalid password type')

    if (password.length < 8) throw new Error('Invalid password min. length')
    if (password.length > 20) throw new Error('Invalid password max. length')

    const users = data.getUsers()

    for (let i = 0; i < users.length; i++) {

        const user = users[i]

        if (user.email === email || user.username === username) throw new Error('user already exists')

    }

    let usersCount = data.getUsersCount()

    usersCount++

    users.push({

        id: 'user-' + usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })

    data.setUsers(users)
    data.setUsersCount(usersCount)
}