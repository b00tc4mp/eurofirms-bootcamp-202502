import { data } from '../data'

/**
 * Removes a post.
 * 
 * @param {string} postId The post id.
 */

export const removePost = postId => {
    //validación de postId
    if (typeof postId !== 'string') throw new Error ('invalid postId typ')
    if (postId.length < 6) throw new Error ('invalid postId length')

    //recibo el post por parametro
    return fetch('http://localhost:8080/posts/' + postId, {
    method: 'DELETE',
    headers: {
        //traemos el userId de sessionStorage en data
        Authorization: 'Basic ' + data.getUserId()
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 204) return

        return response.json()
            .catch(error => { throw new Error('json error')})
            .then(body => {
                const { error, message} = body

                throw new Error(message)
            })
    })
}