import fs from 'fs'

export const data = {
    
    setUsers(users) {
        const json = JSON.stringify(users)

        fs.writeFileSync('./data/users.json', json)
    },

    
    getUsers() {
        const json = fs.readFileSync('./data/users.json', 'utf8')

        const users = JSON.parse(json)

        return users
    },

    setUsersCount(usersCount) {
        const json = JSON.stringify(usersCount)

        fs.writeFileSync('./data/usersCount.json', json)
    },

    getUsersCount() {
        const json = fs.readFileSync('./data/usersCount.json', 'utf8')

        const usersCount = JSON.parse(json)

        return usersCount
    },

    
    setPosts(posts) {
        const json = JSON.stringify(posts)

        fs.writeFileSync('./data/posts.json', json)
    },

    getPosts() {
        const json = fs.readFileSync('./data/posts.json', 'utf8')

        const posts = JSON.parse(json)

        return posts
    },

    
    setPostsCount(postsCount) {
        const json = JSON.stringify(postsCount)

        fs.writeFileSync('./data/postsCount.json', json)
    },

    getPostsCount() {
        const json = fs.readFileSync('./data/postsCount.json', 'utf8')

        const postsCount = JSON.parse(json)

        return postsCount
    }
}