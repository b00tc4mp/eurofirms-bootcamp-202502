import { Post, User } from '../data/index.js';

export const createPost = (userId, image, text) => {
  if (typeof userId !== 'string') throw new Error('User id invalid');
  if (userId.length < 6) throw new Error('Invalid user id length');
  if (typeof image !== 'string') throw new Error('Invalid image type');
  if (!image.startsWith('http')) throw new Error('Invalid image format');
  if (typeof text !== 'string') throw new Error('invalid text type');
  if (text.length < 1) throw new Error('Invalid text lenght');

  return User.findById(userId)
    .catch((error) => console.error(error))
    .then((user) => {
      if (!user) throw new Error('User not found');

      const author = user._id;
      const likes = [];
      return Post.create({ author, image, text, likes });
    })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((post) => {
      console.log('post created', post);
    });
};
