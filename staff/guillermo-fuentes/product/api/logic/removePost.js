import { data } from '../data/index.js';
export const removePost = (userId, postId) => {
  if (typeof userId !== 'string') throw new Error('User id invalid');
  if (userId.length < 6) throw new Error('Invalid user id length');
  if (typeof postId !== 'string') throw new Error('Post id invalid');
  if (postId.length < 6) throw new Error('Invalid post id length');

  const users = data.getUsers();
  const user = users.find((user) => user.id === userId);
  if (!user) throw new Error('user not found');
  const posts = data.getPosts();
  const postIndex = posts.findIndex((post) => post.id === postId);
  if (postIndex < 0) throw new Error('post not found');
  const post = posts[postIndex];
  if (post.author !== userId) throw new Error('user is not owner author');
  posts.splice(postIndex, 1);
  data.setPosts(posts);
};
