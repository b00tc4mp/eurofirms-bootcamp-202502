import { data } from '../data'
import { validate, SystemError, errors } from 'com'

/**
 * Creates a post.
 * 
 * @param {string} image The image URL.
 * @param {string} doctor The surgery's doctor.
 * @param { treatment } treatment Treatment done.
 * @param { city } city Where was the treatment done?
 * @param { experience } experience The patient shows his / her experience. 
 */

//VERIFY that the validations are correct.

export const createPost = (image, doctor, treatment, city, experience) => {//I am adding all data as parameters ON MY APP
    validate.image(image)
    validate.doctor(doctor)
    validate.treatment(treatment)
    validate.city(city)
    validate.experience(experience)

    return fetch(import.meta.env.VITE_API_URL + '/posts', {//THE REQUEST
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'//TO INFORM -- The Content will be in JSON Format
        },
        body: JSON.stringify({ image, doctor, treatment, city, experience })//I am creating the JSON
    })
        .catch(error => { throw SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return //IF it is executed my function finish here

            return response.json()
                .catch(error => { throw new SystemError('json') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
} 