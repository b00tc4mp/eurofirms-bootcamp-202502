import { data } from '../data'

/**
 * Gets all posts from Users in the system.
 * @returns {[{
* id: string,
* author: string, 
* image: string, 
* text: string, 
* date: Date
* }]} The posts from Users in the system.
*/
export const getPosts = () => {

    return fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: {
            Authorization: 'Basic ' + data.getUserId()
        }
    })
        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new Error('json error') })
                    .then(posts => posts)

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}