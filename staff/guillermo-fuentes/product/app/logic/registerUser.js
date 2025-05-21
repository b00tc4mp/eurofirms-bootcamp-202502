import { data } from '../data';
/**Logica de registro de un usuario recibe cuatro parametros
 * @param name representa el nombre del usuario
 * @param email representa el email del usuario
 * @param username representa el nombre de usuario
 * @param password representa la contraseña del usuario
 */
export const registerUser = (name, email, username, password) => {
  if (typeof name !== 'string') throw new Error('invalid name type');
  if (name.length < 1) throw new Error('Invalid lenght name');
  if (name.length > 20) throw new Error('Invalid lenght name');
  if (typeof email !== 'string') throw new Error('invalid email type');
  if (email.length < 6) throw new Error('Invalid lenght email');
  if (email.length > 30) throw new Error('Invalid lenght email');
  if (typeof username !== 'string') throw new Error('invalid username type');
  if (username.length < 1) throw new Error('Invalid lenght username');
  if (username.length > 20) throw new Error('Invalid lenght username');
  if (typeof password !== 'string') throw new Error('invalid password type');
  if (password.length < 8) throw new Error('Invalid lenght password');

  return fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, username, password }),
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
