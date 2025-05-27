import { User, Post } from '../data/index.js';
export const removePost = (userId, postId) => {
  if (typeof userId !== 'string') throw new Error('User id invalid');
  if (userId.length < 6) throw new Error('Invalid user id length');
  if (typeof postId !== 'string') throw new Error('Post id invalid');
  if (postId.length < 6) throw new Error('Invalid post id length');

  return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
    .catch((error) => console.error(error))
    .then(([user, post]) => {
      if (!user) throw new Error('User not found');
      if (!post) throw new Error('post not found');

      const authorId = post.author.toString();
      const userId = user._id.toString();
      if (authorId !== userId) throw new Error('user is not owner author');

      return Post.deleteOne({ _id: post._id });
    })
    .catch((error) => console.error(error))
    .then(() => {});
};
