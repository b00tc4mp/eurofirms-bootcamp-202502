import { data } from '../data'
import { validate, SystemError, errors } from 'com'
/**
 * Removes a post
 *   
 * @param {string} postId The post id
 */
export const removePost = postId => {
    validate.username(username)
    validate.password(password)

    return fetch(import.meta.env.VITE_API_URL +'/posts/' + postId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const  { error, message } = body

                    const constructor = errors [error] || SystemError 

                    throw new constructor(message)
                })
        })
}