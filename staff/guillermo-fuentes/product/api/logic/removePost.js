import { User, Post } from '../data/index.js';
import { ValidationError, NotFoundError, CredentialsError, SystemError, AuthorshipError } from './errors.js';
export const removePost = (userId, postId) => {
  if (typeof userId !== 'string') throw new ValidationError('User id invalid');
  if (userId.length < 6) throw new ValidationError('Invalid user id length');
  if (typeof postId !== 'string') throw new ValidationError('Post id invalid');
  if (postId.length < 6) throw new ValidationError('Invalid post id length');

  return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
    .catch((error) => {
      throw new SystemError('Mongo error');
    })
    .then(([user, post]) => {
      if (!user) throw new NotFoundError('User not found');
      if (!post) throw new NotFoundError('post not found');

      const authorId = post.author.toString();
      const userId = user._id.toString();
      if (authorId !== userId) throw new AuthorshipError('user is not owner author');

      return Post.deleteOne({ _id: post._id }).catch((error) => {
        throw new SystemError('Mongo error');
      });
    })

    .then(() => {});
};
