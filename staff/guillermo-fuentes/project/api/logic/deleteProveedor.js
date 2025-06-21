import { Proveedor, User } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, ValidationError } from '../errors.js';

export const deleteProveedor = (idProveedor, adminId) => {
  if (typeof idProveedor !== 'string' || !idProveedor.trim()) {
    throw new ValidationError('ID del proveedor invalido o vacio');
  }
  return Promise.all([Proveedor.findById(idProveedor), User.findById(adminId)])
    .catch((error) => {
      throw new SystemError('mongo error');
    })
    .then(([proveedor, user]) => {
      if (!proveedor) throw new NotFoundError('proveedor no encontrado');
      if (!user) throw new NotFoundError('usuario no encontrado');
      if (user.rol !== 'administrador') {
        throw new Error('no estas autorizado para realizar esta accion');
      }
      return Proveedor.deleteOne({ _id: idProveedor })
        .catch((error) => {
          throw new SystemError('mongo error');
        })
        .then(() => {});
    });
};
