import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
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
                //si todo va bien no devolveremos nada   
                .then(() => { })
            //el return devuelve una cadena de promesas. En el archivo registerUser.test.js tiene otro .then que se encadena, en el que se pintará en consola 'user registered'
        })
}