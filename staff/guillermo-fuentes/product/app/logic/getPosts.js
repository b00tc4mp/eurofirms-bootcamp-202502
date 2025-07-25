import { data } from '../data';
import { SystemError, errors } from 'com';
/**
 * Obtiene todos los posts de los usuarios en el sistema
 *
 * @returns {[{
 * id: string,
 * author: string,
 * image: string,
 * text: string,
 * date: Date
 * }]}
 */
export const getPosts = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
    },
  })
    .catch((error) => {
      throw new SystemError('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 200)
        return response
          .json()
          .catch((error) => {
            throw new SystemError('json error');
          })
          .then((posts) => {
            console.log('Post recibidos', posts);

            return posts;
          });

      return response
        .json()
        .catch(() => {
          throw new Error('json error');
        })
        .then((body) => {
          const { error, message } = body;

          const constructor = errors[error] || SystemError;

          throw new constructor(message);
        });
    });
};
