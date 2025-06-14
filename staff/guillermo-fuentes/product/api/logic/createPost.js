import { Post, User } from '../data/index.js';
import { validate, ValidationError, NotFoundError, CredentialsError, SystemError } from 'com';
export const createPost = (userId, image, text) => {
  validate.userId(userId);
  validate.image(image);
  validate.text(text);
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
