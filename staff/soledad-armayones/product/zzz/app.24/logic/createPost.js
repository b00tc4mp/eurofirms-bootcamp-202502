import { data } from '../data'
import { validate, SystemError, errors } from 'com'

/**
 * Creates a post.
 * 
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (image, text) => {
    validate.image(image)
    validate.text(text)

    return fetch(import.meta.env.VITE_API_URL + '/posts', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
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