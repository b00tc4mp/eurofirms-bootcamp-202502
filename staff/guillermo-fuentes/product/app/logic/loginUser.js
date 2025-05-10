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
  const users = data.getUsers();
  let user;

  for (let i = 0; i < users.length; i++) {
    const _user = users[i];

    if (_user.username === username) {
      user = _user;

      break;
    }
  }

  if (user === undefined) throw new Error('user not found');

  if (user.password !== password) throw new Error('wrong credentials');
  //Si el login es exitoso se establece el id de usuario que es una propiedad del array users
  data.setUserId(user.id);
};
