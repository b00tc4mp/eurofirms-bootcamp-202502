//nuevo
import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError, CredentialsError } from './errors.js'


/**
 * Authenticates a user from the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const authenticateUser = (username, password) => {
    if (typeof username !== 'string') throw new ValidationError('invalid username type')
    if (username.length < 3) throw new ValidationError('invalid username min length')
    if (username.length > 20) throw new ValidationError('invalid username max length')

    if (typeof password !== 'string') throw new ValidationError('invalid password type')
    if (password.length < 8) throw new ValidationError('invalid password min length')
    if (password.length > 20) throw new ValidationError('invalid password max length')

    return User.findOne({ username })
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            //if (user.password !== password) throw new CredentialsError('credentials error') //antiguo, no podemos comparar contraseña de la BD con que recibimos ya que la de la BD ahora es un bash

            //nuevo, creamos la promesa que compara la contraseña con la que tenemos cifrada
            return bcrypt.compare(password, user.password)
                //al ser una promesa hay que controlar errores
                .catch(error => { throw new SystemError(error.message) })
                //recibimos un match el cual será true si la comparacion es correcta y false si no lo es
                .then(match => {
                    if (!match) throw new CredentialsError('wrong password')

                    return user.id
                })
        })
}

// Antiguo
//  return User.findOne({ username })
//         .catch(error => { throw new SystemError('mongo error') })
//         .then(user => {
//             if (!user) throw new NotFoundError('user not found')

//             if (user.password !== password) throw new CredentialsError('credentials error')

//             return user.id
//         })