import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, CredentialsError, NotFoundError, SystemError } from 'com'

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
                    if (!match) throw new CredentialsError('wrong credential')

                    return user.id
                })
        })
}