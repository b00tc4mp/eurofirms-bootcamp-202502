import { User } from '../data/index.js';
import { validate, ValidationError, NotFoundError, CredentialsError, SystemError } from 'com';
/**
 * retorna el nombre de usuario del usuario ha encontrar por su id
 * @param {string} userId el id de usuario
 */
export const getUserUsername = (userId) => {
  validate.userId(userId);

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
