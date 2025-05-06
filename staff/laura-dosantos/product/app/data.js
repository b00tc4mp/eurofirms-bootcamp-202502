export const data = {
    users: [],
    usersCount: 0,

    posts: [],
    postsCount: 0,

    userId: null
}

// populate users

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'miercolesywednesday',
    email: 'miercoles@wednesaday.com',
    username: 'miercolesywednesday',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'familia adams',
    email: 'familia@adams.com',
    username: 'familiaadams',
    password: '123123123'
})

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXp0bTRkMHh6NXplaWtnaWdscDM2amxnbG4wdDdmamJka2tkbGg3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iibH5ymW6LFvSIVyUc/giphy.gif',
    text: 'I feel very HAPPY!',
    date: new Date(2024, 11, 31, 23, 45).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDFqdDZxOWNjdHppZWV1bnlvcThhM3pua3phOW1lZzVhNzcyMjNsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2NRfpwCwymVJMvPeQ6/giphy.gif',
    text: 'danced in terror!',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[1].id,
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdThsczQzcTduZ3p3bmRrZjExcmlsMmwxYWR3OWd0eWF4ZjV2Y3I1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15bj76PJIEXr7pUWNi/giphy.gif',
    text: 'family adams!',
    date: new Date(2025, 0, 11, 10, 0).toISOString(),
    likes: []
})