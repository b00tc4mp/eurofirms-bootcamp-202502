import { data } from '../data/index.js'

/**
 * Registers a user in the system
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
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


    // Verifica si un usuario se encuentra en la base de datos.
    const users = data.getUsers()

    const user = users.find(user => user.email === email || user.username === username)

    if (user) throw new Error('user already exists')

    // Guarda el nuevo usuario en la base de datos e incrementa el contador de usuarios.  

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