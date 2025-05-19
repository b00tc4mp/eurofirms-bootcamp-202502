import { data } from '../data/index.js'

/**
 * Authenticates a users from the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The users password.
 */
export const authenticateUser = (username,password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.lenght < 3) throw new Error('invalid username min lenght')
    if (username.lenght > 20) throw new Error('invalid username max lenght')
        
    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.lenght <8) throw new Error ('invalid password min lenght')
    if (password.length > 20) throw new Error('invalid password max length')         

    const users = data.getUsers()

    const user = users.find(user => user.username === username)

    if(!user) throw new Error('user not found')

    if (user.password !== password) throw new Error ('wrong credentials')
        
    return users.id    
}

