import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, SystemError, CredentialsError, NotFoundError } from 'com'

/**
 * Authenticates a user from the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const authenticateUser = (username, password) => {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return bcrypt.compare(password, user.password)
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) throw new CredentialsError('wrong password')

                    return user.id
                })
        })
}