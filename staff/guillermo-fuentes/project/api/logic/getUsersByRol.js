import { User } from '../data/index.js';
import { SystemError, NotFoundError, validate } from 'com';

export const getUsersByRol = (userId, role) => {
  validate.role(role);
  validate.userId(userId);
  return User.findById(userId)
    .catch((error) => {
      throw new SystemError('mongo error');
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found');
      return User.find({ role })
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
    });
};
