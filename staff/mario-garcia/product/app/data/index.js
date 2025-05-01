export const data = {

    setUsers(users) {
        localStorage.users = JSON.stringify(users)
    },

    getUsers() {
        return JSON.parse(localStorage.users || '[]')

    },

    // usersCount: 0,
    setUsersCount(usersCount) {
        localStorage.usersCount = JSON.stringify(usersCount)
    },

    getUsersCount() {
        return JSON.parse(localStorage.usersCount)
    },

    // posts: [],
    // postsCount: 0,

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
        return JSON.parse(localStorage.postsCount)
    },

    //userId: null

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