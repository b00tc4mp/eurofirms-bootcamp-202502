import { User, Routine } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Removes a routine by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} routineId The routine id to remove.
 */
export const removeRoutine = (userId, routineId) => {
    validate.userId(userId)
    validate.routineId(routineId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Routine.findById(routineId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(routine => {
                    if (!routine) throw new NotFoundError('routine not found')

                    if (user.role !== 'administrator' && routine.author.toString() !== userId) throw new AuthorshipError('user not author of post')

                    return Routine.deleteOne({ _id: routineId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}