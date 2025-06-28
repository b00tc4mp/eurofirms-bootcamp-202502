import { getPosts } from './getPosts.js'

try {
    const posts = getPosts('user-2')

    console.log('posts gotten', posts)
} catch (error) {
    console.error(error)
}
//le pasamos como unico parametro el userId, será una api get que trabajará con cabecera de autentificación