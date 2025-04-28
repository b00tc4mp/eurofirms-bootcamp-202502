/**
 * 
 */
export const data = {
  users: [],
  usersCount: 0,

  posts: [],
  postsCount: 0,

  /**
   * Guarda el control de sesion en Sessionstorage
   * @param {string} userId 
   */

  setUserId(userId) {
    sessionStorage.userId = userId
  },

  getUserId() {
    return sessionStorage.userId
  },

  removeUserId() {
    delete sessionStorage.userId
  }
}

// Populate users

data.usersCount++

data.users.push({

  id: 'user-' + data.usersCount,
  name: "Wendy Darling",
  email: "wendy@darling.com",
  username: "wendydarling",
  password: "123123123",
})

data.usersCount++

data.users.push({
  id: 'user-' + data.usersCount,
  name: "Peter Pan",
  email: "peter@pan.com",
  username: "peterpan",
  password: "123123123",
})

data.usersCount++

data.users.push({
  id: 'user-' + data.usersCount,
  name: 'James Hook',
  email: 'james@hook.com',
  username: 'jameshook',
  password: '123123123'
})

// populate posts

data.postsCount++

data.posts.push({
  id: 'post-' + data.postsCount,
  author: data.users[0].id,
  image: 'https://giphy.com/gifs/disney-peter-pan-wendy-walt-disney-animation-studios-hBdKJQwWJ98aI',
  text: 'I feel happy',
  date: new Date(2024, 11, 31, 22, 45).toISOString(),
  likes: []
})

data.postsCount++

data.posts.push({
  id: 'post-' + data.postsCount,
  author: data.users[0].id,
  image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWJmMmF4MHRrZ2R2M2h6aXVsZnU1emZvdGRjeTJ6cGIxdnkwb3h1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/149bwlQxfs2NK8/giphy.gif',
  text: 'My best friend!',
  date: new Date(2025, 0, 10, 22, 45).toISOString(),
  likes: []
})

data.postsCount++

data.posts.push({
  id: 'post-' + data.postsCount,
  author: data.users[1].id,
  image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFlYnZnbWtheTkwcXppZWhhdTJjanBxd3A4ZHU0dDZsOXA4bWFyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cHDi1qNyDvRUA/200w.webp',
  text: 'Enjoying my time',
  date: new Date(2025, 2, 22, 23, 45).toISOString(),
  likes: []
})
