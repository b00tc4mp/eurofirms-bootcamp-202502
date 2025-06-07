import { data } from '../data';
/**Logica de login de un usuario contiene dos parametros:
 * @param username representa el nombre de usuario
 * @param password representa la contraseña del usuario
 * gracias a la logica de login la aplicacion sabe que usuario esta logueado gracias al user.id
 */
export const loginUser = (username, password) => {
  if (typeof username !== 'string') throw new Error('invalid username type');
  if (username.length < 3) throw new Error('invalid username min length');
  if (username.length > 20) throw new Error('invalid username max length');

  if (typeof password !== 'string') throw new Error('invalid password type');
  if (password.length < 8) throw new Error('invalid password min length');
  if (password.length > 20) throw new Error('invalid password max length');
  return fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .catch((error) => {
      throw new Error('connection error');
    })
    .then((response) => {
      const { status } = response;

      if (status === 200)
        return response
          .json()
          .catch((error) => {
            throw new Error('json error');
          })
          .then((token) => data.setToken(token));

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
