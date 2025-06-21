import { Proveedor, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, ValidationError } from '../errors.js';

export const addProveedor = (nombre, contacto, direccion, idUsuario) => {
  if (typeof nombre !== 'string' || !nombre.trim()) {
    throw new ValidationError('nombre inválido o vacío');
  }
  if (typeof contacto !== 'string' || !contacto.trim()) {
    throw new ValidationError('contacto inválido o vacío');
  }
  if (typeof direccion !== 'string' || !direccion.trim()) {
    throw new ValidationError('dirección inválida o vacía');
  }
  if (typeof idUsuario !== 'string' || !idUsuario.trim()) {
    throw new ValidationError('idUsuario inválido o vacío');
  }

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
