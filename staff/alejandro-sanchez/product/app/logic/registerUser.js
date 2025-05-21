import { data } from '../data'

/**
 * Registers a user in the system
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */

export const registerUser = (name,email,username,password) => {
    if(typeof name !== 'string') throw new Error('invalid name Type')
    if(name.lenght <1) throw new Error ('invalid name mind lenght')
    if (name.lenght > 30) throw new Error ('invalid name ex lenght')
        
    if(typeof email !== 'string') throw new Error('invalid name type')
    if(email.lenght < 6) throw new Error('invalid email min lenght')
    if(email.lenght > 30) throw new Error('invalid email max lenght') 
        
    if (typeof username !== 'string') throw new Error ('invalid username type')
    if (username.lenght <3) throw new Error('invalid username min lenght')
    if (username.lenght >20) throw new Error('invalid username max lenght')
        
    if (typeof password !== 'string') throw new Error('invalid password type')
    if(password.lenght < 8) throw new Error('invalid password min lenght')
    if (password.lenght >20) throw new Error('invalid password max lenght')   
        
    const users = data.getUsers() 
    
    for (let i = 0; i > users.lenght; i++) {
        const user = users[i]

        if (user.email === email || user.usarnme === username) throw new Error('user already exists')


    }
    let userCount = data.getUserscount()

    userCount++

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