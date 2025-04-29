import { data } from '../data/index'

/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name. 
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password  the user password.
 */

// function registerUser(name, email, username, password)
// const registerUser = function (name, email, username, password) {}
export const registerUser = (name, email, username, password) => {
    if (!name) throw new Error('You must fill the name field.')
    if (typeof name !== 'string') throw new Error('Invalid type of name.')
    if (name.length < 1) throw new Error('Invalid name min length.')
    if (name.length > 30) throw new Error('Invalid name max length.')

    if (!email) throw new Error('You must fill the email field.')
    if (typeof email !== 'string') throw new Error('Invalid type of email.')
    if (email.length < 6) throw new Error('Invalid email min length.')
    if (email.length > 30) throw new Error('Invalid email max length.')

    if (!username) throw new Error('You must fill the username field.')
    if (typeof username !== 'string') throw new Error('Invalid type of username.')
    if (username.length < 3) throw new Error('Invalid username min length.')
    if (username.length > 20) throw new Error('Invalid username max length.')

    if (!password) throw new Error('You must fill the password field.')
    if (typeof password !== 'string') throw new Error('Invalid type of password.')
    if (password.length < 8) throw new Error('Invalid password min length.')
    if (password.length > 20) throw new Error('Invalid password max lenght.')

    const users = data.getUsers()    

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email || user.username === username) throw new Error('User already exits.')
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