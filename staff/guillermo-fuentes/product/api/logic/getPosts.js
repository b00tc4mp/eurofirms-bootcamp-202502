import { Post, User } from '../data/index.js';
import { ValidationError, NotFoundError, SystemError } from './errors.js';
export const getPosts = (userId) => {
  if (typeof userId !== 'string') throw new Error('Invalid user id');
  if (userId.length < 6) throw new Error('Invalid userId lenght');

  /**
   * Promise.all([])->permite manejar mas de una promesa como peticion a base de datos.
   * .lean()->limpia la peticion de impurezas
   * .populate()->metodo para crear relaciones, recibe texto y el primer texto que le pongas sera un objeto este objeto por defecto tendra un campo _id a este se le podra agregar los campos que se quiera como author y username
   */
  return Promise.all([User.findById(userId).lean(), Post.find().populate('author', 'username').sort('-date').lean()])
    .catch((error) => {
      throw new SystemError('Mongo error');
    })
    .then(([user, posts]) => {
      if (!user) throw new NotFoundError('User not found');
      if (!posts) throw new NotFoundError('posts not found');

      posts.forEach((post) => {
        post.id = post._id.toString();
        delete post._id;

        delete post.__v;

        if (post.author._id) {
          post.author.id = post.author._id.toString();
          delete post.author._id;
        }
        //  const authorId = post.author._id.toString();

        // post.author = post.author.username;

        post.own = user._id.toString() === post.author.id;
      });

      return posts;
    });
};
