export const data = {
    //para guardar usuario en localStorage, convertimos a formato JSON
    setUsers(users) {
        localStorage.users = JSON.stringify(users)
    },

    //para recuperar usuario de localStorage, reconvertimos a objeto de JS o si no hay nada que parsee un array vacio -para que no de error-
    getUsers() {
        return JSON.parse(localStorage.users || '[]')
    },

    //para guardar usersCount en localStorage en formato JSON
    setUsersCount(usersCount) {
        localStorage.usersCount = JSON.stringify(usersCount)
    },

    //para recuperar usersCount de localStorage y reconvertir a objeto JS
    getUsersCount() {
        return JSON.parse(localStorage.usersCount)
    },

    //para guardar posts en localStorage, convertimos a formato JSON
    setPosts(posts) {
        localStorage.posts = JSON.stringify(posts)
    },

    //para recuperar posts de localStorage, reconvertimos a objeto de JS, o si no hay nada que parsee un array vacio
    getPosts() {
        return JSON.parse(localStorage.posts || '[]')
    },

    //para guardar postsCount en localStorage en formato JSON
    setPostsCount(postsCount) {
        localStorage.postsCount = JSON.stringify(postsCount)
    },

    //para recuperar postsCount de localStorage y reconvertir a objeto JS
    getPostsCount() {
        return JSON.parse(localStorage.postsCount)
    },
    
    //método para guardar en sessionStorage quién se ha conectado para que el dato permanezca
    setUserId(userId) {
        sessionStorage.userId = userId
    },

    //método para recuperar Id de usuario
    getUserId() {
        return sessionStorage.userId
    },

    //método para eliminar Id de usuario
    removeUserId() {
        delete sessionStorage.userId
    }
}
