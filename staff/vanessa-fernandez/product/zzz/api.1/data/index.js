import fs from 'fs'

export const data = {
    /**
     * Saves users in database (json file).
     * 
     * @param {Array} users The array of users. 
     */
    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    },

    /**
     * Loads users from database (json file).
     * 
     * @returns {Array} The array of users.
     */
    getUsers() {
        const json = fs.readFileSync('./data/users.json', 'utf8')

        const users = JSON.parse(json)

        return users
    },

    /**
     * Saves users count in database (json file).
     * 
     * @param {number} usersCount The number of users in database.
     */
    setUsersCount(usersCount) {
        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/usersCount.json', json)

    },

    /**
     * Loads users count from database (json file).
     * 
     * @returns {number} The number of users in database.
     */
    getUsersCount() {
        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)

        return usersCount
    },

    /**
     * Saves posts in database (json file).
     * 
     * @param {Array} posts The array of posts. 
     */
    setPosts(posts) {
        const json = JSON.stringify(posts)

        fs.writeFileSync('./data/posts.json', json)
    },

    /**
     * Loads posts from database (json file).
     * 
     * @returns {Array} The array of posts.
     */
    getPosts() {
        const json = fs.readFileSync('./data/posts.json', 'utf8')

        const posts = JSON.parse(json)

        return posts
    },

    /**
     * Saves posts count in database (json file).
     * 
     * @param {number} postsCount The number of posts in database.
     */
    setPostsCount(postsCount) {
        const json = JSON.stringify(postsCount)

        fs.writeFileSync('./data/postsCount.json', json)
    },

    /**
     * Loads posts count from database (json file).
     * 
     * @returns {number} The number of posts in database.
     */
    getPostsCount() {
        const json = fs.readFileSync('./data/postsCount.json', 'utf8')

        const postsCount = JSON.parse(json)

        return postsCount
    }

}