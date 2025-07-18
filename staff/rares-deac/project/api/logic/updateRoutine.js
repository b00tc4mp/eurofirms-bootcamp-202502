import { User, Routine } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Updates a routine by id from database
 * 
 * @param {string} userId The requester user id.
 * @param {string} routineId The routine id to update.
 * @param {string} title The title of routine to update.
 * @param {string} description  The description of routine to update.
 * @returns 
 */


export const updateRoutine = (userId, routineId, title, description) => {
    validate.userId(userId)
    validate.routineId(routineId)
    validate.title(title)
    validate.description(description)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Routine.findById(routineId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(routine => {
                    if (!routine) throw new NotFoundError('routine not found')

                    if (user.role !== 'administrator' && routine.author.toString() !== userId) throw new AuthorshipError('user not author of routine')

                    return Routine.updateOne({author: userId, _id: routineId}, {$set: { title, description } } )
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })

        })

}