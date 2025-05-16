import { data } from './index'
//queremos cargar estos datos en localStorage la primera vez que cargamos la pagina, poner el link en index.html > cargar pagina > comment out

//populate users

const users = []
let usersCount = 0

usersCount++

users.push(
    { 
        id: 'user-' + usersCount,
        name: 'Wendy Darling', 
        email: 'wendy@darling.com', 
        username: 'wendydarling', 
        password: '123123123'
    }
)

usersCount++

users.push({ 
    id: 'user-' + usersCount,
    name: 'Peter Pan', 
    email: 'peter@pan.com', 
    username: 'peterpan', 
    password: '123123123'
})

usersCount++

users.push({ 
    id: 'user-' + usersCount,
    name: 'James Hook', 
    email: 'james@hook.com', 
    username: 'jameshook', 
    password: '123123123'
})

//los usuarios estan en memoria y hay que guardarlos en localStorage para su permanencia ( a modo de bbdd )
data.setUsers(users)
data.setUsersCount(usersCount)


//populate posts

const posts = []
let postsCount = 0

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[0].id,
    image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc3eGc1Y24xZXNlano0Y2YxMXl5cmI1OGltNW9uMHowZmhwdzh4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y8btJ3OOxT4sg/giphy.gif',
    text: 'I feel very HAPPY!',
    date: new Date(2024, 11, 31, 23, 45).toISOString(),
    likes: []
})

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[0].id,
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2RucGd3ZTVqcnBrdnJjbXQwdzZlZG9naDQ5cHUxaGZpOXJpNzV3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ClSRyYPD364NO/giphy.gif',
    text: 'My best friend!',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[1].id,
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemZnMnFzZmFxeHdyNjJiZG5heWxnNm43bjV0aXVmMnhvMDFuOTVybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcMFEIgIkVsptQs/giphy.gif',
    text: 'Tea o\'clock with Wendy & friends',
    date: new Date(2025, 0, 11, 20, 15).toISOString(),
    likes: []
})

//persistir datos de los posts en localStorage
data.setPosts(posts)
data.setPostsCount(postsCount)
//con esto se inicializa la bbdd cuando arranca la aplicacion