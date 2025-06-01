import { User } from '../data/index.js'
import { ValidationError, SystemError, DuplicityError } from './errors.js'

/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new ValidationError('invalid name type')
    if (name.length < 1) throw new ValidationError('invalid name min length')
    if (name.length > 30) throw new ValidationError('invalid name max length')

    if (typeof email !== 'string') throw new ValidationError('invalid email type')
    if (email.length < 6) throw new ValidationError('invalid email min length')
    if (email.length > 30) throw new ValidationError('invalid email max length')

    if (typeof username !== 'string') throw new ValidationError('invalid username type')
    if (username.length < 3) throw new ValidationError('invalid username min length')
    if (username.length > 20) throw new ValidationError('invalid username max length')

    if (typeof password !== 'string') throw new ValidationError('invalid password type')
    if (password.length < 8) throw new ValidationError('invalid password min length')
    if (password.length > 20) throw new ValidationError('invalid password max length')

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000) throw new DuplicityError('user already exists')

            throw new SystemError('mongo error')
        })
        .then(() => { })
}
