import fs from 'fs'

export const data = {
    /**
     * Pasa a JSON los usuarios que recoge de users y lo guarda en su archivo.
     * 
     * @param {Array} users The array of users 
     */
    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    },

    /**
     * Lee los usuarios que hay en el archivo JSON, los convierte en array y los retorna.
     * 
     * @returns {Array} El array de usuarios.
     */
    getUsers() {
        const json = fs.readFileSync('./data/users.json', 'utf8')

        const users = JSON.parse(json)

        return users
    },

    /**
     * Guarda el numero de usuarios registrados en data.
     * 
     * @param {number} usersCount El número de usuarios insertados en la base de datos. 
     */
    setUsersCount(usersCount) {
        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/usersCount.json', json)
    },

    /** 
     * Devuelve el número de usuarios guardados en la base de datos.
     * 
     * @returns {number} El número de usuarios en la base de datos.
     */

    getUsersCount() {
        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)

        return usersCount
    },

    /**
     * Pasa a JSON los posts que recoge de posts y lo guarda en su archivo.
     * 
     * @param {Array} posts The array of posts 
     */
    setPosts(posts) {
        const json = JSON.stringify(posts)

        fs.writeFileSync('./data/posts.json', json)
    },

    /**
     * Lee los posts que hay en el archivo JSON, los convierte en array y los retorna.
     * 
     * @returns {Array} El array de posts.
     */
    getPosts() {
        const json = fs.readFileSync('./data/posts.json', 'utf8')

        const posts = JSON.parse(json)

        return posts
    },

    /**
     * Guarda el numero de posts registrados en data.
     * 
     * @param {number} postsCount El número de posts insertados en la base de datos. 
     */
    setPostsCount(postsCount) {
        const json = JSON.stringify(postsCount)

        fs.writeFileSync('./data/postsCount.json', json)
    },

    /** 
     * Devuelve el número de posts guardados en la base de datos.
     * 
     * @returns {number} El número de posts en la base de datos.
     */

    getPostsCount() {
        const json = fs.readFileSync('./data/postsCount.json', 'utf8')

        const postsCount = JSON.parse(json)

        return postsCount
    }
}