import { User } from '../data/index.js';
import { ValidationError, NotFoundError, CredentialsError, SystemError, DuplicityError } from './errors.js';
/**Registra a un usuario en el sistema recibe cuatro parametros
 * @param name el nombre del usuario
 * @param email el email del usuario
 * @param username el nombre de usuario (nick)
 * @param password la constraseña de un usuario
 */
export const registerUser = (name, email, username, password) => {
  if (typeof name !== 'string') throw new ValidationError('invalid name type');
  if (name.length < 1) throw new ValidationError('Invalid lenght name');
  if (name.length > 20) throw new ValidationError('Invalid lenght name');
  if (typeof email !== 'string') throw new ValidationError('invalid email type');
  if (email.length < 6) throw new ValidationError('Invalid lenght email');
  if (email.length > 30) throw new ValidationError('Invalid lenght email');
  if (typeof username !== 'string') throw new ValidationError('invalid username type');
  if (username.length < 1) throw new ValidationError('Invalid lenght username');
  if (username.length > 20) throw new ValidationError('Invalid lenght username');
  if (typeof password !== 'string') throw new ValidationError('invalid password type');
  if (password.length < 8) throw new ValidationError('Invalid lenght password');

  return User.create({ name, email, username, password })
    .catch((error) => {
      if (error.code === 11000) DuplicityError('user alredy exists');
      throw new SystemError('mongo error');
    })
    .then(() => {});
};
