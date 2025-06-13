import { data } from '../data'

/**
 * Creates a post.
 * 
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (image, text) => {
    //ponemos algunas validaciones
    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            //Authorization: 'Basic user-20',
            Authorization: 'Basic ' + data.getUserId(),
            'Content-Type': 'application/json' //como tiene un guion en medio, content-type, lo tenemos que mandar entre comillas
        },
        //body: '{"image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V6cWJlZnYzcXY4ODU0NnV1bjN1ZGxlcHVlajRqenh6b2gxN3pqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GSgWBrpHeRdWE/giphy.gif","text":"pin8 dancing"}'
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