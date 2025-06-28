// exportamos directamente el objeto data, el cuál contiene otros objetos que a su vez contienen arrays
export const data = {
    users: [],
    usersCount: 0,

    posts: [],
    postsCount: 0,

    userId: null
}

//rellenamos usuarios (populate users)

//aumentamos el contador para comenzar por el numero uno y seguidamente añadimos nuevo usuario
data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Noelia Martin',
    email: 'noeliamz97@gmail.com',
    username: 'noelia',
    password: '123456789'
})

//metemos un segundo usuario, con el numero en id a 2
data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'David Molero',
    email: 'davidmobe97@gmail.com',
    username: 'david',
    password: '123456789'
})

//metemos algunos post (populate post)

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRsanpiMzZubHUyYzZzeWJobTV3Z3U2OTVjY2luaWc3cXVreHRyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fAaBpMgGuyf96/giphy.gif',
    text: 'Panda comiendo!',
    date: new Date(2025, 3, 30, 11, 45).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[1].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRsanpiMzZubHUyYzZzeWJobTV3Z3U2OTVjY2luaWc3cXVreHRyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B8DcLMNGHUZHo1tIJ1/giphy.gif',
    text: 'Corre, vuela!',
    date: new Date(2025, 4, 25, 13, 20).toISOString(),
    likes: []
})


//version antigua
// const users = [
//     { name: 'Noelia Martin', email: 'noeliamz97@gmail.com', username: 'noeliamz97', password: '123456789' },
//     { name: 'David Molero', email: 'davidmobe97@gmail.com', username: 'davidmobe97', password: '123456789' }
// ]
// export const data = { users }