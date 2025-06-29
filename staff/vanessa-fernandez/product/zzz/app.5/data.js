export const data = {
    users: [],
    usersCount: 0,

    posts: [],
    postsCount: 0,

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

data.usersCount++

data.users.push({
    id:'user-'+ data.usersCount,
    name: 'Harry Potter',
    email: 'harry@potter.com',
    username: 'harrypotter',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id:'user-'+ data.usersCount,
    name: 'Hermione Granger',
    email: 'hermione@granger',
    username: 'hermionegranger',
    password: '456456456'
})

data.postsCount++

data.posts.push({
    id:'post-' + data.postsCount,
    author: data.users[0].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdremgyb3czOTJma2NtZTRwcW4weWExdnF0MG42bW9udHJiOXU2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mz1kJeDVueKC4/giphy.gif',
    text: 'Buying my firt wand ',
    date: new Date(2024, 11, 31, 23, 45).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: 'https://media.giphy.com/media/13gE2P0Q9LGwBa/giphy.gif?cid=ecf05e47pzhefbd906l76k4zie7ifxy7unt1080ezdel34od&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    text: 'My friend Hermione',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[1].id,
    image: 'https://media.giphy.com/media/P5ow2yhkqzkuA/giphy.gif?cid=ecf05e47pzhefbd906l76k4zie7ifxy7unt1080ezdel34od&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    text: 'Sorting hat',
    date: new Date(2025, 4, 10, 11, 45).toISOString(),
    likes: []
})



