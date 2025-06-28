import { User } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getUserUsername = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            return user.username    
        })
}