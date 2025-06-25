// import { Provider, User } from '../data/index.js';
// import { DuplicityError, NotFoundError, SystemError, validate } from 'com';

// export const addProvider = (name, contact, direction, adminId, userId) => {
//   validate.name(name);
//   validate.contact(contact);
//   validate.direction(direction);
//   validate.userId(userId);

//   return User.findById(userId)
//     .catch((error) => {
//       throw new SystemError('Mongo error: ' + error.message);
//     })
//     .then((user) => {
//       if (!user) throw new NotFoundError('User not found');
//       const isAdmin = user.role === 'administrator';

//       // Si no es administrador ni es el mismo user, se deniega la operación
//       if (!isAdmin) {
//         throw new Error('You are not authorized to perform this operation');
//       }
//       const userId = user._id;
//       return Provider.create({ name, contact, direction, user: userId })
//         .catch((error) => {
//           if (error.code === 11000) {
//             throw new DuplicityError('Provider name alredy exist');
//           }
//           throw new SystemError('Mongo error: ' + error.message);
//         })
//         .then((provider) => provider);
//     });
// };
// logic/providers.js
// logic/providers.js
import { Provider, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, validate } from 'com';

export const addProvider = (name, contact, direction, adminId, userFullName) => {
  validate.name(name, 'provider name');
  validate.contact(contact);
  validate.direction(direction);
  validate.userId(adminId, 'adminId');
  validate.name(userFullName, 'user fullName'); // Validar que userFullName no esté vacío

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
      return User.find({
        fullName: { $regex: `^${userFullName}$`, $options: 'i' }, // Coincidencia exacta
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

          const user = users[0]; // Tomar el único usuario encontrado

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
