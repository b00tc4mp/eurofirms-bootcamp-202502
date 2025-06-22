import { User } from '../data/index.js';
import { NotFoundError, SystemError } from 'com';

export const getUsers = () => {
  return User.find()
    .lean()

    .catch((error) => {
      throw new SystemError('Error in MongoDB');
    })
    .then((users) => {
      if (!users || users.length === 0) {
        throw new NotFoundError('Users not found');
      }

      users.forEach((user) => {
        user.id = user._id.toString();
        delete user._id;
        delete user.__v;
      });

      return users;
    });
};
