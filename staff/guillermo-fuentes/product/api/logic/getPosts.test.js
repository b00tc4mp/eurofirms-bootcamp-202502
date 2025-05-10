import { getPosts } from './getPosts.js';
try {
  const posts = getPosts('user-16');
  console.log('posts obtenidos', posts);
} catch (error) {
  console.error(error);
}
