import bcrypt from 'bcryptjs'

import { UserDoctor } from '../../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const registerUserDoctor = (username, password) => {
    validate.username(username)
    validate.password(password)

    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return UserDoctor.create({ username, password: hash })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists') //

                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}
//uso exclusivo de api