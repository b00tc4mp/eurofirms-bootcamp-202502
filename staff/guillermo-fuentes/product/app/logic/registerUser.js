import { validate, SystemError, errors } from 'com';
/**Logica de registro de un usuario recibe cuatro parametros
 * @param name representa el nombre del usuario
 * @param email representa el email del usuario
 * @param username representa el nombre de usuario
 * @param password representa la contraseña del usuario
 */
export const registerUser = (name, email, username, password) => {
  validate.name(name);
  validate.email(email);
  validate.username(username);
  validate.password(password);

  return fetch(`${import.meta.env.VITE_API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, username, password }),
  })
    .catch((error) => {
      throw new SystemError('connection error');
    })
    .then((response) => {
      const { status } = response;
      if (status === 201) return;
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
