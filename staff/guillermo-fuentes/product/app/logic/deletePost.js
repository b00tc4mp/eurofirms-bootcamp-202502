import { data } from '../data';
import { validate, SystemError, errors } from 'com';
/** Logica encargada de eliminar un post por su id recibe un solo parametro
 * @param idPost el id del post a eliminar
 *
 */

export const deletePost = (idPost) => {
  validate.postId(idPost);
  return fetch(`${import.meta.env.VITE_API_URL}posts/${idPost}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch((error) => {
      throw new SystemError('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 204) return;
      return response
        .json()
        .catch((error) => {
          throw new SystemError('json error');
        })
        .then((body) => {
          const { error, message } = body;

          const constructor = errors[error] || SystemError;

          throw new constructor(message);
        });
    });
};
