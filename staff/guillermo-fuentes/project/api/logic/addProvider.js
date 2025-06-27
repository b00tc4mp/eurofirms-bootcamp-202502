import { Provider, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, validate, PermissionError } from 'com';
//Poner adminId primero
export const addProvider = (adminId, name, contact, direction,  userId) => {
  validate.adminId(adminId);
  validate.name(name);
  validate.contact(contact);
  validate.direction(direction);
 validate.userId(userId);

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
      return User.findById(userId)
        .lean()
        .catch((error) => {
          throw new SystemError(`Mongo error: ${error.message}`);
        })
        .then((user) => {
          if (!user) {
            throw new NotFoundError('User not found');
          }
      
          // Verificar que el usuario encontrado no sea el administrador
          if (user._id.toString() === adminId) {
            throw new PermissionError('Admin cannot be assigned as provider');
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
