import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { DuplicityError, SystemError, validate } from 'com';

export const registerUser = (fullName, email, password, direction, role) => {
  // Validaciones de entrada
  validate.name(fullName);
  validate.email(email);
  validate.password(password);
  validate.direction(direction);
  validate.role(role);
  const saltRounds = 10;

  return bcrypt
    .hash(password, saltRounds)
    .catch((error) => {
      throw new SystemError(error.message || 'Register error');
    })
    .then((hashedPassword) => {
      return User.create({
        fullName,
        email,
        password: hashedPassword,
        direction,
        role,
      })
        .catch((error) => {
          if (error.code === 11000) {
            throw new DuplicityError('the user with this email already exists');
          }
          throw new SystemError(error.message || 'Register error');
        })
        .then(() => {});
    });
};
