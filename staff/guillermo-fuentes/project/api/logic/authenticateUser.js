import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { validate, NotFoundError, CredentialsError } from 'com';

export const authenticateUser = (email, password) => {
  validate.email(email);
  validate.password(password);
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

          return { id: user.id, role: user.role };
        });
    });
};
