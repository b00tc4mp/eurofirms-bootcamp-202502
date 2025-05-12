import { removePost } from './removePost.js';
try {
  removePost('user-20', 'post-1');
} catch (error) {
  console.error(error);
}
