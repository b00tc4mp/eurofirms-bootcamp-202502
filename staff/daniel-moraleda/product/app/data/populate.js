import { data } from './index'

//populate users

const users = []
let usersCount = 0

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
})

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
    date: new Date(2024, 11, 31, 23, 45).toISOString(),
    likes: []
})

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[0].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2U5a2U5dHI3cW16dG5rOW5iMzU0dGRuYTE1YzJ0OHJ5ZXBzaGFhMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduMrlC4MtcQ3cEU/giphy.gif',
    text: 'My best friend!',
    date: new Date(2025, 0, 10, 18, 15).toISOString(),
    likes: []
})

postsCount++

posts.push({
    id: 'post-' + postsCount,
    author: users[1].id,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2U5a2U5dHI3cW16dG5rOW5iMzU0dGRuYTE1YzJ0OHJ5ZXBzaGFhMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/149bwlQxfs2NK8/giphy.gif',
    text: 'Enjoying with Wendy!',
    date: new Date(2025, 0, 11, 10, 0).toISOString(),
    likes: []
})

data.setPosts(posts)
data.setPostsCount(postsCount)