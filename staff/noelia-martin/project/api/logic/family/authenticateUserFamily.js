import bcrypt from 'bcryptjs'

import { UserFamily } from '../../data/index.js'

import { validate, SystemError, CredentialsError, NotFoundError } from 'com'

export const authenticateUserFamily = (username, password) => {
    validate.username(username)
    validate.password(password)

    return UserFamily.findOne({ username })
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