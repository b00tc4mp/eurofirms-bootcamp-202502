import { User, Place } from '../data/index.js'
import { validate, SystemError, errors, NotFoundError } from 'com'

/**
 * Creates a place.
 * 
 * @param {string} userId The user id.
 * @param {string} placeName Place name.
 * @param {string} category Place category.
 * @param {string} country Country of place.
 * @param {string} city City of place.
 * @param {string} address Place address.
 * @param {string} website Place website.
 * @param {string} telephone Place telephone.
 * @param {string} description Place description.
 * @param {string} image Place image url.
 */
export const createPlace = (userId, placeName, category, country, city, address, website, telephone, description, image) => {
    validate.userId(userId)
    validate.placeName(placeName)
    validate.category(category)
    validate.country(country)
    validate.city(city)
    validate.address(address)
    validate.website(website)
    validate.telephone(telephone)
    validate.description(description)
    validate.image(image)

    return User.findById(userId)
        .catch(error => {throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Place.create({ author: userId, placeName, category, country, city, address, website, telephone, description, image})
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })
}