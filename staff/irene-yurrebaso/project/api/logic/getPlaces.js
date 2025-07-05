import { User, Place } from '../data/index.js'
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
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            
                //populate con 'reviews' quitar para vista corta
            return Place.find({}).select('name city description image').select('-__v').populate('reviews').sort('-dateCreated').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(places => {
                    places.forEach(place => {
                        place.id = place._id.toString()
                        delete place._id
                    })

                    return places
                })

        })
}