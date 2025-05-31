import { data } from '../data/index.js'

/**
 * Creates a post in database.
 * 
 * @param {string} userId The user id.
 * @param {string} image The post image url.
 * @param {string} text The post text.
 */
export const createPost = (userId, image, text) => {
    //hacemos varias verificaciones para cada parametro recibido
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!image.startsWith('http')) throw new Error('invalid image format')

    if (typeof text !== 'string') throw new Error('invalid text type')
    if (text.length < 1) throw new Error('invalid min text length')

    // verify user exists searching it by user id
    // if user not found then throw error
    // if user found then continue with create post

    //creamos una última validacion, que tratará de verificar que el usuario que quiere subir el posts está registrado
    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    //a partir de aqui la logica es igual que en app exceptuando que no usamos el dato de sesion de usuario(SsesionStore) sino el parametro que nos han dado
    let postsCount = data.getPostsCount()

    postsCount++

    const post = {
        id: 'post-' + postsCount,
        author: user.id, //podría poner directamente el parametro recibido, pero como tengo un nuevo array llamado user con todos los datos del usuario pasado por parametro, lo usaré
        image,
        text,
        date: new Date().toISOString(),
        likes: []
    }

    const posts = data.getPosts()

    posts.push(post)

    data.setPosts(posts)
    data.setPostsCount(postsCount)
}