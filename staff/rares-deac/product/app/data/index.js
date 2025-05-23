/**
 * 
 */
export const data = {
    // /**
    //  * recibo el usuario y lo guardo en localStorage
    //  * @param {string} users 
    //  */
    // setUsers(users) {
    //     localStorage.users = JSON.stringify(users)
    // },

    // /**
    //  * 
    //  * @returns devuelve el usuario que se le indica
    //  */

    // getUsers() {
    //     return JSON.parse(localStorage.users || '[]')
    // },


    // setUsersCount(usersCount) {
    //     localStorage.usersCount = JSON.stringify(usersCount)
    // },

    // getUsersCount() {
    //     return JSON.parse(localStorage.usersCount || '0')
    // },

    // setPosts(posts) {
    //     localStorage.posts = JSON.stringify(posts)
    // },

    // getPosts() {
    //     return JSON.parse(localStorage.posts || '[]')
    // },

    // setPostsCount(postsCount) {
    //     localStorage.postsCount = JSON.stringify(postsCount)
    // },

    // getPostsCount() {
    //     return JSON.parse(localStorage.postsCount || '0')
    // },

    // /**
    //  * Guarda el control de sesion en Sessionstorage
    //  * @param {string} userId 
    //  */

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