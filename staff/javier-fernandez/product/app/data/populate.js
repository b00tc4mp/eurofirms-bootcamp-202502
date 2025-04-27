import { data } from './index'

// populate users

const users = []
let usersCount = 0

users.Count++

users.push({
    id: 'user-' + usersCount,
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123123123'
})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Peter Pan',
    email: 'peter@pan',
    username: 'peterpan',
    password: '123123123'
})

usersCount++

users,push({
    id: 'user-' + usersCount,
    name: 'James Hook',
    email: 'james@hook',
    password: '123123123'
})

data.setUsers(users)
data.setUsersCount(usersCount)

// populate posts

const posts = []
let postsCount = 0

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[0].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2U5a2U5dHI3cW16dG5rOW5iMzU0dGRuYTE1YzJ0OHJ5ZXBzaGFhMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11NU4BxIpTYNGw/giphy.gif',
    text: 'I feel very HAPPY!',
    date: new Date(2024,11,31,26,45).toISOString(),
    likes: []
})

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[0].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2U5a2U5dHI3cW16dG5rOW5iMzU0dGRuYTE1YzJ0OHJ5ZXBzaGFhMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduMrlC4MtcQ3cEU/giphy.gif',
    text: 'My best friend',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})