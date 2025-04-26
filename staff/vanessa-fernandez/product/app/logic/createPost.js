/*import { data } from '../data'

const createPost = (image, text) => {
    if (!text) throw new Error('You must provide text.')
    if (typeof text !== 'string') throw new Error('Invalid text type.')
    if (text.length < 10) throw new Error('Invalid text min length.')
    if (text.length > 250) throw new Error('Invalid text max length.')

    if (!image) throw new Error('You must provide an image.')

    const userId = data.userId

    if (!userId) throw new Error('User not authenticated.')

    const user = data.users.find(user => user.id === userId)

    if (!user) throw new Error('User not found.')

    data.postsCount++

    data.posts.push({
        id: 'post-' + data.postsCount,
        author: user.name,
        image: image,
        text: text,
        date: new Date().toISOString(),
        likes: []
    })
}*/