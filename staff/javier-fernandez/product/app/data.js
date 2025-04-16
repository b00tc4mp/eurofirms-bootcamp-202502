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

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: '',
    text: 'I feel very HAPPY! ',
    date: new Date(2024, 11, 31, 23, 45).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0],id,
    image: ''
    text: 'My best friend!',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    image: '',
    text: 'Enjoying with Wendy',
    date: new Date(2025, 0, 11, 10, 0).toISOString(),
    likes: []
})