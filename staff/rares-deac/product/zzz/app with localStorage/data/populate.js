import { data } from './index'

// Populate users

const users = []
let usersCount = 0

usersCount++

users.push({
  id: 'user-' + usersCount,
  name: "Wendy Darling",
  email: "wendy@darling.com",
  username: "wendydarling",
  password: "123123123",
})

usersCount++

users.push({
  id: 'user-' + usersCount,
  name: "Peter Pan",
  email: "peter@pan.com",
  username: "peterpan",
  password: "123123123",
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
  image: 'https://giphy.com/gifs/disney-peter-pan-wendy-walt-disney-animation-studios-hBdKJQwWJ98aI',
  text: 'I feel happy',
  date: new Date(2024, 11, 31, 22, 45).toISOString(),
  likes: []
})

postsCount++

posts.push({
  id: 'post-' + postsCount,
  author: users[0].id,
  image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWJmMmF4MHRrZ2R2M2h6aXVsZnU1emZvdGRjeTJ6cGIxdnkwb3h1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/149bwlQxfs2NK8/giphy.gif',
  text: 'My best friend!',
  date: new Date(2025, 0, 10, 22, 45).toISOString(),
  likes: []
})

postsCount++

posts.push({
  id: 'post-' + postsCount,
  author: users[1].id,
  image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFlYnZnbWtheTkwcXppZWhhdTJjanBxd3A4ZHU0dDZsOXA4bWFyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cHDi1qNyDvRUA/200w.webp',
  text: 'Enjoying my time',
  date: new Date(2025, 2, 22, 23, 45).toISOString(),
  likes: []
})

data.setPosts(posts)
data.setPostsCount(postsCount)