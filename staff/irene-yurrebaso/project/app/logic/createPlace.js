import { data } from '../data'
import { validate, SystemError, errors } from 'com'

/**
 * Adds a place.
 * 
 * @param {string} name The place name.
 * @param {string[]} category Place category or category.
 * @param {string} country Country of place.
 * @param {string} city City of place.
 * @param {string} address Place address.
 * @param {string} website Place website.
 * @param {string} telephone Place telephone.
 * @param {string} description Place description.
 * @param {string} image Place image url.
 */

export const createPlace = (name, category, country, city, address, website, telephone, description, image) => {
    validate.name(name)
    validate.category(category)
    validate.country(country)
    validate.city(city)
    validate.address(address)
    validate.website(website)
    validate.telephone(telephone)
    validate.description(description)
    validate.image(image)

    return fetch(import.meta.env.VITE_API_URL + '/places', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, category, country, city, address, website, telephone, description, image })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response
            
            if (status === 201) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}