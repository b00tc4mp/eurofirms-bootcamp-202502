import bcrypt from 'bcryptjs'

import { UserFamily } from '../../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const registerUserFamily = (nameChild, username, password, healthCareNumber, dateOfBirth) => {
    validate.nameChild(nameChild)
    validate.username(username)
    validate.password(password)
    validate.healthCareNumber(healthCareNumber)
    validate.dateOfBirth(dateOfBirth)


    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return UserFamily.create({ nameChild, username, password: hash, healthCareNumber, dateOfBirth })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists') //

                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}