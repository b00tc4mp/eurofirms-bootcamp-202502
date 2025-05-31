import { Post, User } from '../data/index.js';
import { ValidationError, NotFoundError, CredentialsError, SystemError } from './errors.js';
export const createPost = (userId, image, text) => {
  if (typeof userId !== 'string') throw new ValidationError('User id invalid');
  if (userId.length < 6) throw new ValidationError('Invalid user id length');
  if (typeof image !== 'string') throw new ValidationError('Invalid image type');
  if (!image.startsWith('http')) throw new ValidationError('Invalid image format');
  if (typeof text !== 'string') throw new ValidationError('invalid text type');
  if (text.length < 1) throw new ValidationError('Invalid text lenght');

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError('Mongo error');
    })
    .then((user) => {
      if (!user) throw new NotFoundError('User not found');

      const author = user._id;
      const likes = [];
      return Post.create({ author, image, text, likes })
        .catch((error) => {
          throw new SystemError('Mongo error');
        })
        .then((post) => {});
    });
};
