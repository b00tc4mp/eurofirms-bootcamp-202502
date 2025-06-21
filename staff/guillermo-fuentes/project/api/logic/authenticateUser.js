import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { ValidationError, NotFoundError, CredentialsError, SystemError } from '../errors.js';

export const authenticateUser = (email, password) => {
  if (typeof email !== 'string') throw new ValidationError('invalid email type');
  if (email.length < 6) throw new ValidationError('invalid lenght email');
  if (email.length > 30) throw new ValidationError('invalid lenght email');
  if (typeof password !== 'string') throw new ValidationError('invalid password type');
  if (password.length < 8) throw new ValidationError('invalid lenght password');
  return User.findOne({ email })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found');

      return bcrypt
        .compare(password, user.password)
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((match) => {
          if (!match) throw new CredentialsError('wrong password');

          return { id: user.id, rol: user.rol };
        });
    });
};
