import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const registerUser = (name, email, username, password) => {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ name, email, username, password: hash })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists')

                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}