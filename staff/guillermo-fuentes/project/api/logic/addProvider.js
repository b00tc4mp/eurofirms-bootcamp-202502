import { Provider, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, validate } from 'com';

export const addProvider = (name, contact, direction, adminId, userFullName) => {
  validate.name(name);
  validate.contact(contact);
  validate.direction(direction);
  validate.userId(adminId);
  validate.name(userFullName);

  // Verificar que el usuario autenticado es administrador
  return User.findById(adminId)
    .catch((error) => {
      throw new SystemError(`Mongo error: ${error.message}`);
    })
    .then((admin) => {
      if (!admin) throw new NotFoundError('Admin not found');
      if (admin.role !== 'administrator') {
        throw new Error('User is not authorized to perform this operation');
      }

      // Buscar el usuario por nombre completo usando regex

      //TODO Cambiar userFullname por un id
      return User.find({
        fullName: userFullName,
      })
        .lean()
        .catch((error) => {
          throw new SystemError(`Mongo error: ${error.message}`);
        })
        .then((users) => {
          if (!users || users.length === 0) {
            throw new NotFoundError('User not found');
          }
          if (users.length > 1) {
            throw new Error('Multiple users found with the same name. Please provide a more specific name.');
          }

          const user = users[0];

          // Verificar que el usuario encontrado no sea el administrador
          if (user._id.toString() === adminId) {
            throw new Error('Admin cannot be assigned as provider');
          }

          // Crear el proveedor
          return Provider.create({
            name,
            contact,
            direction,
            user: user._id,
          })
            .catch((error) => {
              if (error.code === 11000) {
                throw new DuplicityError('Provider name already exists');
              }
              throw new SystemError(`Mongo error: ${error.message}`);
            })
            .then((provider) => provider);
        });
    });
};
