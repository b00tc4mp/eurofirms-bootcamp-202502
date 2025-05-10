import fs from 'fs'

export const data = {

    /**
     * Pasa a JSON los Usuarios que recoge de USERS & los GUARDA en su Archivo.
     * 
     * @param {Array} users El Array de Usuarios.
     */

    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    },

    /**
     * Lee los USERS que hay en el Archivo JSON + Los CONVIERTE en Array + Los DEVUELVE.
     * 
     * @returns {Array} El Array de Usuarios
     */

    getUsers() {

        const json = fs.readFileSync('./data/users.json', 'utf8')

        const users = JSON.parse(json)

        return users

    },

    /**
     * Guarda el Número de Usuarios REGISTRADOS en el Archivo usersCount (data).
     * 
     * @param {number} usersCount Número de Usuarios GUARDADOS en la Base de Datos.
     */

    setUsersCount(usersCount) {

        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/usersCount.json', json)
    },

    /**
     * CARGA el Número de USERS que tenemos en usersCount.json + Los CONVIERTE en Número + Los DEVUELVE.
     * 
     * En la Línea 58 me lo CONVIERTE a Formato NÚMERO.
     * 
     * @returns {number} Línea 60 = El Número de Usuarios en la BBDD.
     */

    getUsersCount() {

        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)

        return usersCount
    },

    /**
     * GUARDAMOS los Posts en la BB.DD. (json File)
     * 
     * @param {Array} Posts El Array de Posts.
     */

    setPosts(posts) {

        const json = JSON.stringify(posts)

        fs.writeFileSync('./data/posts.json', json)
    },

    /**
     * DEVOLVEMOS los Posts desde la BB.DD. (json File)
     * 
     * @returns {Array} El Array de Posts.
     */

    getPosts() {

        const json = fs.readFileSync('./data/posts.json', 'utf8')

        const posts = JSON.parse(json)

        return posts
    },

    /**
     * GUARDAMOS el Contador de Posts en la BB.DD. (json File)
     * 
     * @param {number} postsCount El Número de Posts de la BB.DD.
     * 
     */

    setPostsCount(postsCount) {

        const json = JSON.stringify(postsCount)

        fs.writeFileSync('./data/postsCount.json', json)

    },

    /**
     * CARGAMOS el Contador de Posts desde la BB.DD. (json File)
     * 
     * @returns {number} El Número de Posts de la BB.DD.
     */

    getPostsCount() {

        const json = fs.readFileSync('./data/postsCount.json', 'utf8')

        const postsCount = JSON.parse(json)

        return postsCount
    }

}