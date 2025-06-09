import { data } from '../data'

/**
 * Creates a post.
 * @param {string} image The image url.
 * @param {string} text The post text. 
 */

export const createPost = (image, text) => {
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    /**
     * copia en memoria la cantidad de posts extraidos de data
     */

    // let postsCount = data.getPostsCount()

    // postsCount++

    // const post = {
    //     id: 'post-' +postsCount,
    //     author: data.getUserId(),
    //     image,
    //     text,
    //     date: new Date().toISOString(),
    //     likes: []
    // }

    // /**
    //  * Guarda el post en la base de datos
    //  */

    // const posts = data.getPosts()

    // posts.push(post)

    // data.setPosts(posts)
    // data.setPostsCount(postsCount)

    //Aplicamos fetch para que retorne el post 

    return fetch('http://localhost:8080/posts', {
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
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })

        })

}