import { User, Place } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Returns a place from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} placeId The requested place id.
 * @returns {Promise<Object>} The place requested from database.
 */
export const getPlaceDetails = (userId, placeId) => {
    validate.userId(userId)
    validate.placeId(placeId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Place.findById(placeId).select('name category address city country description website telephone image').select('-__v').populate('author', '_id').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(place => {
                    if (!place) throw new NotFoundError('place not found')

                    place.id = place._id.toString()
                    delete place._id

                    if (!place.author) throw new AuthorshipError('place has no author')

                    if (place.author._id) {
                        place.author.id = place.author._id.toString()
                        delete place.author._id
                    }

                    place.own = place.author.id === userId

                    return place
                })
        })
}