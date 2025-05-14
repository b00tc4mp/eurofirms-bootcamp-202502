import { data } from '../data/index.js'

/**
 * register a user in the system
 * 
 * @param {string} name The user name
 * @param {string} email The user e-mail
 * @param {string} username The user username.
 * @param {string} password The user password
 */

export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name max length')
    if (name.length > 30) throw new Error('invalid name max length')

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email min length')
    if (email.length > 30) throw new Error('invalid name max length')

    if (typeof username !=='string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username max length') 
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    const users = data.getUsers() //traigo los usuarios del json

    const user = users.find(user => user.email === email || user.username === username) //verifica que no hay usuarios repetidos

    if (user) throw new Error('user already exists') //si enceuntra el usuario lanza el error

    let usersCount = data.getUsersCount() //traemos el contador de usuarios

    usersCount++ //añadimos uno al contador 

    users.push({ //añadimos un usuario al array de usuarios
        id: 'user-' + usersCount,
        name: name,
        email: email,
        username: username,
        passsword: password
    })

    data.setUsers(users) //reescribe los usuarios en el fichero json de usuarios
    data.setUsersCount(usersCount) //reescribe el contador de usuarios en el fichero json de contador de usuarios
}