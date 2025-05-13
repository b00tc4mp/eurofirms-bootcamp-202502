import fs from 'fs'

export const data = {
    /**
     * Saves users in database (json file).
     * 
     * @param { string } users The array of users.
     */
    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    },

    /**
     * Loads users from database (json file). 
     * 
     * @returns { array } El array de usuarios.
     */
    getUsers() {
        const json = fs.readFileSync('./data/users.json', 'utf8')

        const users = JSON.parse(json)

        return users
    },

    /**
     * Saves users count in database (json file).
     * @param { number } usersCount The number of users in database.
     */
    setUsersCount(usersCount) {
        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/usersCount.json', json)
    },

    /**
     * Loads users count from database. 
     * @returns { number } The number of users in database.
     */
    getUsersCount() {
        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)

        return usersCount
    }
}