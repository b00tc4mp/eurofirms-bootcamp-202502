import { UserFamily } from '../../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getUserFamilyUsername = userId => {
    validate.userId(userId)

    return UserFamily.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return user.username
        })
}