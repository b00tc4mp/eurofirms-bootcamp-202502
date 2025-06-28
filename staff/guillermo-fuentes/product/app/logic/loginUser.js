import { data } from '../data';
import { validate, SystemError, errors } from 'com';
/**Logica de login de un usuario contiene dos parametros:
 * @param username representa el nombre de usuario
 * @param password representa la contraseña del usuario
 * gracias a la logica de login la aplicacion sabe que usuario esta logueado gracias al user.id
 */
export const loginUser = (username, password) => {
  validate.username(username);
  validate.password(password);
  
  return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
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
          .then((token) => data.setToken(token));

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
