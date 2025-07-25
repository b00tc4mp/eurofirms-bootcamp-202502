import { data } from '../data/index.js'

//exactamente igual que en la app; ningun cambio ya que hemos nombrado los metodos que necesita de data igual que teniamos en app
/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
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

    const users = data.getUsers()
    /*for que teniamos en app, lo cambiamos por el metodo find
    for (let i = 0; i < users.length; i++) {
            var usuario = users[i]
            if (usuario.email === email || usuario.username === username) throw new Error('user already exists')
        }
    */
    const user = users.find(user => user.email === email || user.username === username)

    if (user) throw new Error('user already exists')

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