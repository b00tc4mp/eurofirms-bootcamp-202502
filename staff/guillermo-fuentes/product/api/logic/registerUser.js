import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { validate, SystemError, DuplicityError } from 'com';

/**Registra a un usuario en el sistema recibe cuatro parametros
 * @param name el nombre del usuario
 * @param email el email del usuario
 * @param username el nombre de usuario (nick)
 * @param password la constraseña de un usuario
 */
export const registerUser = (name, email, username, password) => {
  validate.name(name);
  validate.email(email);
  validate.username(username);
  validate.password(password);

  const saltRounds = 10;

  return bcrypt
    .hash(password, saltRounds)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((hashedPassword) => {
      return User.create({ name, email, username, password: hashedPassword })
        .catch((error) => {
          if (error.code === 11000) throw new DuplicityError('user alredy exists');
          throw new SystemError('mongo error');
        })
        .then(() => {});
    })
    .catch((error) => {
      throw new Error('Error al hashead' + error);
    });
};
