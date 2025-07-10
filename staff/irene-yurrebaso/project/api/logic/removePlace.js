import { User, Place } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Removes a place by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} placeId The id of place to be removed.
 */
export const removePlace = (userId, placeId) => {
    validate.userId(userId)
    validate.placeId(placeId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Place.findById(placeId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(place => {
                    if (!place) throw new NotFoundError('place not found')
                    
                    if (place.author.toString() !== userId) throw new AuthorshipError('user not author of place')
                    
                    return Place.deleteOne({ _id: placeId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}