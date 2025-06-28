export const data = {
    //antiguo: users: [],// ahora utilizaremos metodos que guarda y rescata los usuarios en localStorage(el cual no se elimina excepto que le des manualmente a eliminar)
    setUsers(users) {
        localStorage.users = JSON.stringify(users) //este metodo de JSON convierte el array users en formato JSON. sera: [{"id":"user-1","name":"noelia"...},{"id":...}]
    },
    getUsers() {
        return JSON.parse(localStorage.users || '[]') //este metodo coge el formato JSON y lo convierte en el formato que tenia antes
        //el or configurado evita errores si no tenemos ningun usuario guardado le decimos que lo interprete como vacio, idem con con todos los get.
    },
    //antiguo: usersCount: 0, //idem que con users
    setUsersCount(usersCount) {
        localStorage.usersCount = JSON.stringify(usersCount)
    },
    getUsersCount() {
        return JSON.parse(localStorage.usersCount || '[]')
    },

    //Repetimos lo mismo que con el array users
    //posts: [],
    //postsCount: 0,
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
        return JSON.parse(localStorage.postsCount || '[]')
    },

    //userId: null //en vez de utilizar la variable userId que con el refresco de la pg se borra, vamos a utilizar session storage el cual no es volatil pero solo funciona en la pestaña que estes, si la cierras se elimina. Eso es seguro, asi trabaja la banca
    //creamos dos metodos uno para añadir el usuario conectado a sessionStorage y otro para averiguar qué usuario es el que está registrado
    setUserId(userId) {
        sessionStorage.userId = userId
    },
    getUserId() {
        return sessionStorage.userId
    },

    //creamos removeUserId para que borre el usuario una vez de desconecte
    removeUserId() {
        delete sessionStorage.userId
    }
}