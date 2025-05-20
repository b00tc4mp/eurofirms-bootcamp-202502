import { data } from '../data'


/**
 * Creates a post
 * 
 * @param {string} image The post image url. 
 * @param {string} text The post text.
 */

export const createPost = (image, text) => {
    if (!text) throw new Error('You must provide text.')
    if (typeof text !== 'string') throw new Error('Invalid text type.')
    if (text.length < 1) throw new Error('Invalid text min length.')
    if (text.length > 250) throw new Error('Invalid text max length.')


    if(typeof image !== 'string') throw new Error('Invalid image type.')    
    if(!image.startsWith('http')) throw new Error('Invalid image format.')    
    if (!image) throw new Error('You must provide an image.')

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + data.getUserId(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({ image, text })
    })
        .catch(error => { throw new Error ('Connection error')})
        .then(response => {
            const { status } = response

            if(status === 201) return

            return response.json()
                .catch(error => { throw new Error('json error')})
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
    
}