import { data } from '../data/index.js';

export const createPost = (userId, image, text) => {
  if (typeof userId !== 'string') throw new Error('User id invalid');
  if (userId.length < 6) throw new Error('Invalid user id length');
  if (typeof image !== 'string') throw new Error('Invalid image type');
  if (!image.startsWith('http')) throw new Error('Invalid image format');
  if (typeof text !== 'string') throw new Error('invalid text type');
  if (text.length < 1) throw new Error('Invalid text lenght');
  const users = data.getUsers();
  const user = users.find((user) => user.id === userId);
  if (!user) throw new Error('user not found');
  let postsCount = data.getPostsCount();

  postsCount++;

  const post = {
    id: 'post-' + postsCount,
    author: user.id,
    image,
    text,
    date: new Date().toLocaleDateString('es-es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    likes: [],
  };

  const posts = data.getPosts();

  posts.push(post);

  data.setPosts(posts);
  data.setPostsCount(postsCount);
};
