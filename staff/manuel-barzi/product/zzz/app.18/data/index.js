export const data = {
    setUsers(users) {
        localStorage.users = JSON.stringify(users)
    },

    getUsers() {
        return JSON.parse(localStorage.users || '[]')
    },

    setUsersCount(usersCount) {
        localStorage.usersCount = JSON.stringify(usersCount)
    },

    getUsersCount() {
        return JSON.parse(localStorage.usersCount || '0')
    },

    setPosts(posts) {
        localStorage.posts = JSON.stringify(posts)
    },

    getPosts() {
        return JSON.parse(localStorage.posts || '[]')
    },

    setPostsCount(postsCount) {
        localStorage.postsCount = JSON.stringify(postsCount)
    },

    getPostsCount() {
        return JSON.parse(localStorage.postsCount || '0')
    },

    setUserId(userId) {
        sessionStorage.userId = userId
    },

    getUserId() {
        return sessionStorage.userId
    },

    removeUserId() {
        delete sessionStorage.userId
    }
}