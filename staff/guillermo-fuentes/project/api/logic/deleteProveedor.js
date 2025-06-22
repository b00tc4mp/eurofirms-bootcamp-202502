import { Proveedor, User } from '../data/index.js';
import { SystemError, validate, NotFoundError } from 'com';

export const deleteProveedor = (providerId, adminId) => {
  validate.idProveedor(providerId);
  validate.adminId(adminId);
  return Promise.all([Proveedor.findById(providerId), User.findById(adminId)])
    .catch((error) => {
      throw new SystemError('mongo error');
    })
    .then(([provider, user]) => {
      if (!provider) throw new NotFoundError('Provider not found');
      if (!user) throw new NotFoundError('user not found');
      if (user.role !== 'administrator') {
        throw new Error('you are not authorized to carry out this action');
      }
      return Proveedor.deleteOne({ _id: providerId })
        .catch((error) => {
          throw new SystemError('mongo error');
        })
        .then(() => {});
    });
};
