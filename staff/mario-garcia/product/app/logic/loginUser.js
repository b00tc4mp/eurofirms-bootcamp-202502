import { data } from '../data'

/**
 * Logs a User in the system
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {

    if (typeof username !== 'string') throw new Error('Invalid username type')

    if (username.length < 3) throw new Error('Invalid username min. length')
    if (username.length > 20) throw new Error('Invalid username max. length')

    if (typeof password !== 'string') throw new Error('Invalid password type')

    if (password.length < 8) throw new Error('Invalid password min. length')
    if (password.length > 20) throw new Error('Invalid password max. length')

    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        //Lo siguiente VERIFICA si el username que estoy INCLUYENDO está en mi BB.DD.

        if (_user.username === username) {

            user = _user //Si el username esta en mi BB.DD. le doy valor a mi "let user" y YA =/= undefined

            //Lo de arriba VERIFICA si el username que estoy INCLUYENDO está en mi BB.DD.

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('Invalid credentials')


    data.setUserId(user.id)
}