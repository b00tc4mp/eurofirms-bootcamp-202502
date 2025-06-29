import { User } from '../data/index.js'
import { ValidationError, SystemError, NotFoundError, CredentialsError } from './errors.js'

/**
 * Authenticates a user from the system
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
        //En caso de error lanzamos nuestro error con el mensaje original q venga de mongo
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => { 
            if (!user) throw new NotFoundError('user not found')

            if (user.password !== password) throw new CredentialsError('wrong password')
            
            //si todo va bien retornar el user Id
            //mongoose devuelve el string del ObjectId llamando a la propiedad id
            //return user._id.toString() Tambien se puede hacer asi
            return user.id
        })
}