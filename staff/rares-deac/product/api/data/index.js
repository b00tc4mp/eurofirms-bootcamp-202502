import fs from 'fs' 



export const data = {
    /**
     * Pasa a JSON los usuarios que recoge de users y lo guarda en su archivo.
     * 
     * @param {string} users 
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
    }
}