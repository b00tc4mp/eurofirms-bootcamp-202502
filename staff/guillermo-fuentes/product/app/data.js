export const data = {
  setUsers(users) {
    localStorage.users = JSON.stringify(users);
  },
  getUsers() {
    const users = JSON.parse(localStorage.users);
    return users;
  },

  setUsersCount(usersCount) {
    localStorage.usersCount = JSON.stringify(usersCount);
  },
  getUsersCount() {
    return JSON.parse(localStorage.usersCount);
  },
  // posts: [],
  //postsCount: 0,
  setPosts(posts) {
    localStorage.posts = JSON.stringify(posts);
  },
  getPosts() {
    const posts = JSON.parse(localStorage.posts);
    return posts;
  },
  setPostCount(postsCount) {
    localStorage.postsCount = JSON.stringify(postsCount);
  },
  getPostCount() {
    return JSON.parse(localStorage.postsCount);
  },
  setUserId(userId) {
    sessionStorage.userId = userId;
  },
  getUserId() {
    return sessionStorage.userId;
  },
  removeUserId() {
    delete sessionStorage.userId;
  },
};
const users = [];
let usersCount = 0;
usersCount++;
users.push({
  id: 'user-' + usersCount,
  name: 'wendy darling',
  email: 'wendy@darling.com',
  username: 'wendydarling',
  password: '12345678',
});
usersCount++;
users.push({
  id: 'user-' + usersCount,
  name: 'Peter pan',
  email: 'peter@pan.com',
  username: 'peterpan',
  password: '12345678',
});
data.setUsers(users);
data.setUsersCount(usersCount);

const posts = [];
let postsCount = 0;
postsCount++;
posts.push({
  id: 'post-' + postsCount,
  author: users[0].id,
  image:
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnMxMG50c3FneXkxZ2tneGQzNjNsODd2ZmFkbGJiYXNqbWsyYXZjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11NU4BxIpTYNGw/giphy.gif',
  text: 'I feel very happy',
  date: new Date().toISOString(),
  likes: [],
});
postsCount++;
posts.push({
  id: 'post-' + postsCount,
  author: users[1].id,
  image:
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNobWlleGdwdGE2bG4ya2thc2R2bzNpeGpyN2RtMWh4emV3aXc5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lDR0wnXboVr8c/giphy.gif',
  text: 'Flying',
  date: new Date(2024, 0, 11, 10, 0).toISOString(),
  likes: [],
});
data.setPosts(posts);
data.setPostCount(postsCount);
