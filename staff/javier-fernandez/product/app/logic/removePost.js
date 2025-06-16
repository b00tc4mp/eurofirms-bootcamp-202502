import { data } from '../data'
import { Validate, SystemError, errors } from 'com'
/**
 * Removes a post
 *   
 * @param {string} postId The post id
 */
export const removePost = postId => {
    Validate.postId(postId)

    return fetch(import.meta.env.VITE_API_URL +'/posts/' + postId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const constructor { error, message } = body

                    throw new constructor(message)
                })
        })
}