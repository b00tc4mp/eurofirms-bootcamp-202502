import { Post, User } from '../data/index.js';

export const getPosts = (userId) => {
  if (typeof userId !== 'string') throw new Error('Invalid user id');
  if (userId.length < 6) throw new Error('Invalid userId lenght');

  /**
   * Promise.all([])->permite manejar mas de una promesa como peticion a base de datos.
   * .lean()->limpia la peticion de impurezas
   * .populate()->metodo para crear relaciones, recibe texto y el primer texto que le pongas sera un objeto este objeto por defecto tendra un campo _id a este se le podra agregar los campos que se quiera como author y username
   */
  return Promise.all([User.findById(userId).lean(), Post.find().populate('author', 'username').lean()])
    .catch((error) => console.error(error))
    .then(([user, posts]) => {
      if (!user) throw new Error('User not found');
      if (!posts) throw new Error('posts not found');

      posts.forEach((post) => {
        post.id = post._id.toString();
        delete post._id;

        delete post.__v;

        const authorId = post.author._id.toString();

        post.author = post.author.username;

        post.own = user._id.toString() === authorId;
      });

      return posts;
    });
};
