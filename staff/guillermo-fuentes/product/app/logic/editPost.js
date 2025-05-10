import { data } from '../data';
/** Logica necesaria para editar un post
 * recibe tres parametros
 * @param idPost el id del post a editar
 * @param text el texto a editar
 * @param image el enlace de la imagen a editar
 */
export const editPost = (idPost, text, image) => {
  const posts = data.getPosts();
  const indice = posts.findIndex((post) => post.id === idPost);
  posts[indice].text = text;
  posts[indice].image = image;
  data.setPosts(posts);
};
