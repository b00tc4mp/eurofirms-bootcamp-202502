import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { validate, NotFoundError, CredentialsError, SystemError } from 'com';

/**
 * Authenticates a user from the system.
 *
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const authenticateUser = (username, password) => {
  validate.username(username);
  validate.password(password);

  return User.findOne({ username })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found');
      
      return bcrypt
        .compare(password, user.password)
        .then(() => {
          return user.id;
        })
        .catch(() => {
          throw new CredentialsError('credentials error');
        });
    });
};
