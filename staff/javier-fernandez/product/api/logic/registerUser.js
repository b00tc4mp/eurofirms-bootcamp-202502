import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { Validate, DuplicityError, SystemError } from 'com'

/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    Validate.name(name)
    Validate.email(email)
    Validate.username(username)
    Validate.password(password)
        
    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ name, email, username, password: hash })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists')

                    throw new SystemError('mongo error')
                })
        })
        .then(() => { })
}