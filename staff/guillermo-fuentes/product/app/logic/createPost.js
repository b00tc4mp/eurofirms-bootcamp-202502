import { data } from '../data'; //Importacion de la "base de datos"
/**
 * Logica encargada de crear un post este metodo recibe 2 parametros:
 * @param image este parametro recibe el enlace de la imgan
 * @param text este parametro recibe el texto
 */

export const createPost = (image, text) => {
  if (typeof image !== 'string') throw new Error('invalid image type');
  if (!image.startsWith('http')) throw new Error('Invalid image format');
  if (typeof text !== 'string') throw new Error('invalid text type');
  if (text.length < 1) throw new Error('Invalid text lenght');

  return fetch(`${import.meta.env.VITE_API_URL}posts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${data.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image, text }),
  })
    .catch((error) => {
      throw new Error('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
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
