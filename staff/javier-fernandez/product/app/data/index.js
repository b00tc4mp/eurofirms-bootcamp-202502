import fs from 'fs'

export const data = { 
    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    }, 

    getUsers() {
        const json = fs.readFileSync('./dara/users.json', 'utf8')

        const users = JSON.parse(json)

        return users
    },

    setUsersCount(usersCount) {
        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/userCount.json', json)
    },

    getUsersCount() {
        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)
         
        return usersCount
    },

}