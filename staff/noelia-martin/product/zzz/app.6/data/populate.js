import { data } from './index'; //necesito a index

/*El profesor nos explica que debemos comentar(para ejecutar) y descomentar(para no ejecutar) la siguiente linea en el index.html :
    <!-- <script src="data/populate.js" type="module"></script> -->
Es una buena opción, pero yo voy a utilizar el siguiente if
Asi no tengo que estar pendiente de comentar y descomentar*/


//con el if indico que se ejecute solo si NO hay datos en LocalStorage
if (!localStorage.users) {
    //populate users: vienen bien cuando no tenemos nada en la base de datos, para comenzar a meter algo de dato. Una vez se haya metido y guardado, deja de ser necesario. De ejecutarlo automaticamente reiniciara constamente todo y nuevos usuarios no se podran almacenar

    //nuevo, creamos un array vacio que será el que almacene los usuarios que metemos aqui a mano y un contador que empezara por 0
    const users = []
    let usersCount = 0
    //cambiamos data.users y data.usersCount por las variables creadas antes
    usersCount++

    users.push({
        id: 'user-' + usersCount,
        name: 'Noelia Martin',
        email: 'noeliamz97@gmail.com',
        username: 'noelia',
        password: '123456789'
    })

    usersCount++

    users.push({
        id: 'user-' + usersCount,
        name: 'David Molero',
        email: 'davidmobe97@gmail.com',
        username: 'david',
        password: '123456789'
    })

    //guardamos en la base de datos, en LocalStorage
    data.setUsers(users)
    data.setUsersCount(usersCount)


    //metemos algunos post (populate post)
    //misma modificacion que hice con users, pero ahora con posts
    const posts = []
    let postsCount = 0
    postsCount++

    posts.push({
        id: 'post-' + postsCount,
        author: users[0].id,
        image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRsanpiMzZubHUyYzZzeWJobTV3Z3U2OTVjY2luaWc3cXVreHRyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fAaBpMgGuyf96/giphy.gif',
        text: 'Panda comiendo!',
        date: new Date(2025, 3, 30, 11, 45).toISOString(),
        likes: []
    })

    postsCount++

    posts.push({
        id: 'post-' + postsCount,
        author: users[1].id,
        image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRsanpiMzZubHUyYzZzeWJobTV3Z3U2OTVjY2luaWc3cXVreHRyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B8DcLMNGHUZHo1tIJ1/giphy.gif',
        text: 'Corre, vuela!',
        date: new Date(2025, 4, 25, 13, 20).toISOString(),
        likes: []
    })

    data.setPosts(posts)
    data.setPostsCount(postsCount)
}