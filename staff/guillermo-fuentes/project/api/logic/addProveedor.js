import { validate } from 'com';
import { Proveedor, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, ValidationError } from '../errors.js';

export const addProveedor = (nombre, contacto, direccion, idUsuario) => {
  validate.name(nombre);
  validate.contact(contacto);
  validate.direction(direccion);
  validate.userId(idUsuario);

  return User.findById(idUsuario)
    .catch((error) => {
      throw new SystemError('Mongo error: ' + error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError('Usuario no encontrado');
      const usuarioId = user._id;
      return Proveedor.create({ nombre, contacto, direccion, usuario: usuarioId })
        .catch((error) => {
          if (error.code === 11000) {
            throw new DuplicityError('Proveedor con este nombre ya existe');
          }
          throw new SystemError('Mongo error: ' + error.message);
        })
        .then((proveedor) => proveedor); // Return the created proveedor
    });
};
