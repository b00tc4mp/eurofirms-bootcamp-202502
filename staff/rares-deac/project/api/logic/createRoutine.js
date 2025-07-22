import { User, Routine } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * Creates a routine in database
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createRoutine = (userId, title, description) => {
    validate.userId(userId)
    validate.title(title)
    validate.description(description)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Routine.create({ author: userId, title, description })
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })
}