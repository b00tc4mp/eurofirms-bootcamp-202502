import { User, Place } from '../data.index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Returns places from database.
 * 
 * @param {string} userId The requester user id.
 * @returns {array} The places from database.
 */
export const getPlaces = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(places => {
            if (!user) throw new NotFoundError('user not found')

            return Place.find({}).select('-__v').populate('author', 'placeName', 'category', 'country', 'city', 'address', 'website', 'telephone', 'description', 'image').sort('-dateCreated').lean()
                .catch()
                .then()

        })
}