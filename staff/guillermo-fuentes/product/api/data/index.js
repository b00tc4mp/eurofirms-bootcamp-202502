import fs from 'fs';

export const data = {
  setUsers(users) {
    // const json = JSON.stringify(users);
    // fs.writeFileSync('./users.json', json);

    const json = JSON.stringify(users, null, 2);
    //fs.mkdirSync('./data', { recursive: true });
    fs.writeFileSync('./data/users.json', json);
  },

  getUsers() {
    const json = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(json);
    return users;
  },

  setUsersCount(usersCount) {
    const json = JSON.stringify(usersCount);
    fs.writeFileSync('./data/usersCount.json', json);
  },

  getUsersCount() {
    const json = fs.readFileSync('./data/usersCount.json', 'utf-8');
    const count = JSON.parse(json);
    return count;
  },

  // setPosts(posts) {
  //   const json = JSON.stringify(posts);
  //   fs.writeFileSync('./posts.json', json);
  // },

  // getPosts() {
  //   const json = fs.readFileSync('./posts.json', 'utf-8');
  //   const posts = JSON.parse(json);
  //   return posts;
  // },

  // setPostsCount(postsCount) {},
  // getPostsCount() {},
};
