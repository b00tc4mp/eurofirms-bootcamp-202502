import bcrypt from 'bcryptjs'

import { UserFamily } from '../../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const registerUserFamily = (username, password, nameChild, healthCareNumber, dateOfBirth) => {
    validate.username(username)
    validate.password(password)
    validate.nameChild(nameChild)
    validate.healthCareNumber(healthCareNumber)
    validate.dateOfBirth(dateOfBirth)


    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return UserFamily.create({ username, password: hash, nameChild, healthCareNumber, dateOfBirth })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists') //

                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}