export const data = {
    /*users: [],
    usersCount: 0,*/
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


    /*posts: [],
    postsCount: 0,*/
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

    setUserId(userId) { // usamos un setter para setear(modificar) userId en sessionStorage y no perder datos al recargar
        sessionStorage.userId = userId
    },

    getUserId() { // usamos un getter para retornar el dato que almacena sessionStorage en userId
        return sessionStorage.userId
    },

    removeUserId() { // metodo para eliminar un userId, lo usamos en el metodo logout para volver a null el userId
        delete sessionStorage.userId
    }
}

