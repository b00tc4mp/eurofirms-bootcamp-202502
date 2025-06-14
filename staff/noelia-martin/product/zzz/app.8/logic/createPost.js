import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (image, text) => {
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    //return fetch('http://localhost:8080/posts', {
    return fetch(import.meta.env.VITE_API_URL + '/posts', {
        method: 'POST',
        headers: {
            //Cambio Basic por Bearer y el metodo getUserId() por getToken()
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
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}