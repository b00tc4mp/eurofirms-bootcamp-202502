import { data } from '../data/index.js'

/**
 * Authenticates a user from the system
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const authenticateUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    // Comprueba que el usuario está en la base de datos y la contraseña es correcta. En caso de que todo sea correcto, devuelve el id del usuario.

    const users = data.getUsers()

    const user = users.find(user => user.username === username)

    if (!user) throw new Error ('user not found')

    if(user.password !== password) throw new Error('wrong credentials')

    return user.id
}