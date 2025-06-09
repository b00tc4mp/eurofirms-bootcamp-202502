import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image The image URL.
 * @param {string} text The post text. 
 */

export const createPost = (image, text) => {

    if (typeof image !== 'string') throw new Error('Invalid image type')

    if (!image.startsWith('http')) throw new Error('Invalid image format')

    if (typeof text !== 'string') throw new Error('Invalid text type')

    if (text.length < 1) throw new Error('Text length is NOT enough')

    return fetch(import.meta.env.VITE_API_URL + '/posts', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .catch(error => { throw Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .catch(error => { throw new Error('json') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
} 