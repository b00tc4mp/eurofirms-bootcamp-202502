import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

/**
 * Registers a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} email The user e-mail.
 * @param {string} password The user password.
 */

export const registerUser = (username, email, password) => {
    validate.username(username)
    validate.email(email)
    validate.password(password)

    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ username, email, password: hash })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists')
                    
                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}