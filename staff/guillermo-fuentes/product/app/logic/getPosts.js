import { data } from '../data';
export const getPosts = () => {
  const posts = data.getPosts();
  const users = data.getUsers();
  const userId = data.getUserId();
  posts.forEach((post) => {
    const authorId = post.author;

    const user = users.find((user) => user.id === authorId);

    const username = user.username;

    post.author = username;

    post.own = authorId === userId;
  });
  return posts;
};
