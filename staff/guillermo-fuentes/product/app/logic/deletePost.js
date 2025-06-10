import { data } from '../data';
import { logic } from '../logic';
/** Logica encargada de eliminar un post por su id recibe un solo parametro
 * @param idPost el id del post a eliminar
 *
 */

export const deletePost = (idPost) => {
  // const posts = logic.getPosts();
  // const indice = posts.find((post) => post.id === idPost);

  // posts.splice(indice, 1);

  // data.setPosts(posts);

  return fetch(`${import.meta.env.VITE_API_URL}posts/${idPost}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch((error) => {
      throw new Error('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 204) return;
      return response
        .json()
        .catch((error) => {
          throw new Error('json error');
        })
        .then((body) => {
          const { error, message } = body;
          throw new Error(message);
        });
    });
};
