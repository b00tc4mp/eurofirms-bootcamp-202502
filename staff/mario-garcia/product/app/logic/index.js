import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUserName'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getPosts } from './getPosts'
import { createPost } from './createPost'


// /**
//  * Registers a USER in the system.
//  * 
//  * @param {string} name The User name.
//  * @param {string} email email The User e-mail.
//  * @param {string} username username The User username.
//  * @param {string} password password The User password.
//  */

// const registerUser = (name, email, username, password) => {

//     if (typeof name !== 'string')
//         throw new Error('Invalid name type')

//     if (name.length < 1) throw new Error('Invalid name min. length')
//     if (name.length > 30) throw new Error('Invalid name max. length')

//     if (typeof email !== 'string')
//         throw new Error('Invalid email type')

//     if (email.length < 6) throw new Error('Invalid email min. length')
//     if (email.length > 30) throw new Error('Invalid email max. length')

//     if (typeof username !== 'string')
//         throw new Error('Invalid username type')

//     if (username.length < 3) throw new Error('Invalid username min. length')
//     if (username.length > 20) throw new Error('Invalid username max. length')

//     if (typeof password !== 'string')
//         throw new Error('Invalid password type')

//     if (password.length < 8) throw new Error('Invalid password min. length')
//     if (password.length > 20) throw new Error('Invalid password max. length')


//     for (let i = 0; i < data.users.length; i++) {

//         const user = data.users[i]

//         if (user.email === email || user.username === username) throw new Error('user already exists')

//     }


//     data.usersCount++

//     data.users.push({

//         id: 'user-' + data.usersCount,
//         name: name,
//         email: email,
//         username: username,
//         password: password
//     })
// }

// /**
//  * Logs a User in the system
//  * @param {string} username The user username.
//  * @param {string} password The user password.
//  */
// const loginUser = (username, password) => {

//     if (typeof username !== 'string') throw new Error('Invalid username type')

//     if (username.length < 3) throw new Error('Invalid username min. length')
//     if (username.length > 20) throw new Error('Invalid username max. length')

//     if (typeof password !== 'string') throw new Error('Invalid password type')

//     if (password.length < 8) throw new Error('Invalid password min. length')
//     if (password.length > 20) throw new Error('Invalid password max. length')

//     let user

//     for (let i = 0; i < data.users.length; i++) {
//         const _user = data.users[i]

//         //Lo siguiente VERIFICA si el username que estoy INCLUYENDO está en mi BB.DD.

//         if (_user.username === username) {

//             user = _user //Si el username esta en mi BB.DD. le doy valor a mi "let user" y YA =/= undefined

//             //Lo de arriba VERIFICA si el username que estoy INCLUYENDO está en mi BB.DD.

//             break
//         }
//     }

//     if (user === undefined) throw new Error('user not found')

//     if (user.password !== password) throw new Error('Invalid credentials')


//     data.userId = user.id

// }

// /**
//  * 
//  * @returns {string} The user username.
//  */

// const getUserUsername = () => {

//     let user

//     for (let i = 0; i < data.users.length; i++) {
//         const _user = data.users[i]

//         if (_user.id === data.userId) {

//             user = _user

//             break
//         }
//     }

//     if (user === undefined) throw new Error('user not found')

//     return user.username

// }

// /**
//  * Logs a User out of the system.
//  */
// const logoutUser = () => {

//     data.removeUserId()

// }

// //Con !! convertimos cualquier Elemento en BOOLEANO

// /**
//  * Gets whether user is Logged In the system.
//  * 
//  * @returns {boolean} The state of User LOG (True if LoggedIn - False if LoggedOut)
//  */
// const isUserLoggedIn = () => !!data.getUserId()


// /**
//  * Gets all posts from Users in the system.
//  * @returns {[{
//  * id: string,
//  * author: string, 
//  * image: string, 
//  * text: string, 
//  * date: Date
//  * }]} The posts from Users in the system.
//  */
// const getPosts = () => {

//     return data.posts.toReversed()
// }

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser,
    isUserLoggedIn,
    getPosts,
    createPost
}