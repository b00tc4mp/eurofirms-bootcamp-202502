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
    name: '',
    email: 'miercoles@wednesday.com',
    username: 'miercolesywednesay',
    password: 'adams'
})

