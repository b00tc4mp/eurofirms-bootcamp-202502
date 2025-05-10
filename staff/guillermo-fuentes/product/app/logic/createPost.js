import { data } from '../data'; //Importacion de la "base de datos"
/**
 * Logica encargada de crear un post este metodo recibe 2 parametros:
 * @param image este parametro recibe el enlace de la imgan
 * @param text este parametro recibe el texto */
export const createPost = (image, text) => {
  if (typeof image !== 'string') throw new Error('invalid image type');
  if (!image.startsWith('http')) throw new Error('Invalid image format');
  if (typeof text !== 'string') throw new Error('invalid text type');
  if (text.length < 1) throw new Error('Invalid text lenght');
  let postsCount = data.getPostCount();

  postsCount++;

  const post = {
    id: 'post-' + postsCount,
    author: data.getUserId(),
    image,
    text,
    date: new Date().toLocaleDateString('es-es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    likes: [],
  };

  const posts = data.getPosts();

  posts.push(post);

  data.setPosts(posts);
  data.setPostCount(postsCount);
};
