export const data = {
  users: [],
  usersCount: 0,
  posts: [],
  postsCount: 0,
  userId: null,
};

data.users.push({
  id: 'user-' + data.usersCount,
  name: 'wendy darling',
  email: 'wendy@darling.com',
  username: 'wendydarling',
  password: '12345678',
});
data.usersCount++;
data.users.push({
  id: 'user-' + data.usersCount,
  name: 'Peter pan',
  email: 'peter@pan.com',
  username: 'peterpan',
  password: '12345678',
});
data.postsCount++;
data.posts.push({
  id: 'post-' + data.postsCount,
  author: data.users[0].id,
  image:
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnMxMG50c3FneXkxZ2tneGQzNjNsODd2ZmFkbGJiYXNqbWsyYXZjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11NU4BxIpTYNGw/giphy.gif',
  text: 'I feel very happy',
  date: new Date().toISOString(),
  likes: [],
});
data.postsCount++;
data.posts.push({
  id: 'post-' + data.postsCount,
  author: data.users[1].id,
  image:
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNobWlleGdwdGE2bG4ya2thc2R2bzNpeGpyN2RtMWh4emV3aXc5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lDR0wnXboVr8c/giphy.gif',
  text: 'Flying',
  date: new Date(2024, 0, 11, 10, 0).toISOString(),
  likes: [],
});
