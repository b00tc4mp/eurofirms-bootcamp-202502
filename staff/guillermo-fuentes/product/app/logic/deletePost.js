import { data } from '../data';
/** Logica encargada de eliminar un post por su id recibe un solo parametro
 * @param idPost el id del post a eliminar*/
export const deletePost = (idPost) => {
  const posts = data.getPosts();
  const indice = posts.findIndex((post) => post.id === idPost);
  if (indice !== -1) {
    posts.splice(indice, 1);

    data.setPosts(posts);
  }
};
