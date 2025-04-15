export const data = {
    users: [],
    usersCount: 0,

    posts: [],
    postsCount: 0.

    userId: null
}

// populate users

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Peter Pan',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'James Hoock',
    email: 'james@hoock',
    username: 'jameshoock',
    password: '123123123'
})

// populate posts