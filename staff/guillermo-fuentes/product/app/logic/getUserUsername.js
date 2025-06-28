import { data } from '../data';
import { SystemError, errors } from 'com';
/**Logica que obtiene el nombre de usuario para mostrar ese nombre en la interfaz, esta logica contiene un bucle que recorre el array usuarios y va comprobando usuario por usuario y ver si coincide la id del usuario si hay coincidencia muestra el nombre de usuario de ese usuario 

*/
export const getUserUsername = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/users/self/username`, {
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
          .then((username) => username);

      return response
        .json()
        .catch(() => {
          throw new SystemError('json error');
        })
        .then((body) => {
          const { error, message } = body;

          const constructor = errors[error] || SystemError;

          throw new constructor(message);
        });
    });
};
