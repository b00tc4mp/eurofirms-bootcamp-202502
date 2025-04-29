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
