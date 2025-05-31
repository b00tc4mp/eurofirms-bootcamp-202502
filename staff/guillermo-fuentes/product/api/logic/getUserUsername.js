import { User } from '../data/index.js';
import { ValidationError, NotFoundError, CredentialsError, SystemError } from './errors.js';
/**
 * retorna el nombre de usuario del usuario ha encontrar por su id
 * @param {string} userId el id de usuario
 */
export const getUserUsername = (userId) => {
  if (typeof userId !== 'string') throw ValidationError('User id invalid');
  if (userId.length < 6) throw ValidationError('Invalid userId length');

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError('Mongo error');
    })
    .then((user) => {
      debugger;
      if (!user) throw new NotFoundError('user not found');

      return user.username;
    });
};
