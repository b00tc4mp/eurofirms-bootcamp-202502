import { User, Routine } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError} from 'com'

/**
 * Returns routine from database.
 * 
 * @param {string} userId The requester user id.
 * 
 * @returns {array} The routines from database.
 * 
 */
export const getRoutines = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => {throw new SystemError('mongo error')})
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Routine.find({author: userId}).select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(routines => {
                    routines.forEach(routine => {
                        routine.id = routine._id.toString()
                        delete routine._id

                        if (!routine.author) throw new AuthorshipError('routine has not author')

                        if (routine.author._id) {
                            routine.author.id = routine.author._id.toString()
                            delete routine.author._id
                        }

                        routine.own = routine.author.id === userId
                    })

                    return routines
                })
        })
}