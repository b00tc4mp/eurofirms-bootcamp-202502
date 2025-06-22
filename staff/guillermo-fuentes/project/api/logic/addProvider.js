import { Provider, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, validate } from 'com';

export const addProvider = (name, contact, direction, idUser) => {
  validate.name(name);
  validate.contact(contact);
  validate.direction(direction);
  validate.userId(idUser);

  return User.findById(idUser)
    .catch((error) => {
      throw new SystemError('Mongo error: ' + error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError('User not found');
      const userId = user._id;
      return Provider.create({ name, contact, direction, user: userId })
        .catch((error) => {
          if (error.code === 11000) {
            throw new DuplicityError('Provider name alredy exist');
          }
          throw new SystemError('Mongo error: ' + error.message);
        })
        .then((provider) => provider);
    });
};
