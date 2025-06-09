import { data } from '../data'

/**
 * Removes a post.
 * @param {string} postId The post id. 
 */

export const removePost = postId => {
    if (typeof postId !== 'string') throw new Error('invalid postId type')
    if (postId.length < 6) throw new Error('invalid postId length')

    // const posts = data.getPosts()

    // const index = posts.findIndex(post => post.id === postId)

    // if (index < 0) throw new Error('post not found')

    // posts.splice(index, 1)

    // data.setPosts(posts)

    return fetch('http://localhost:8080/posts/' + postId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })

        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}