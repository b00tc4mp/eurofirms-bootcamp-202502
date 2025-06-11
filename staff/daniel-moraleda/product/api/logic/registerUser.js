import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { ValidationError, SystemError, DuplicityError } from './errors.js'

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

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username max length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ name, email, username, password: hash })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user alerady exists')
                    throw new SystemError('mongo error')       
                })
                .then(()=> { })
        })      

}       