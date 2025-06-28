import { User, Post } from '../data/index.js';
import { validate, ValidationError, NotFoundError, CredentialsError, SystemError, AuthorshipError } from 'com';
export const removePost = (userId, postId) => {
  validate.userId(userId);
  validate.postId(postId);

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
