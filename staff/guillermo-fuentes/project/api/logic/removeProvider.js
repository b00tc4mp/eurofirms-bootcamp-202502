import { Provider, User } from '../data/index.js';
import { SystemError, validate, NotFoundError } from 'com';

export const removeProvider = (providerId, adminId) => {
  validate.idProveedor(providerId);
  validate.adminId(adminId);
  return Promise.all([Provider.findById(providerId), User.findById(adminId)])
    .catch((error) => {
      throw new SystemError('mongo error');
    })
    .then(([provider, user]) => {
      if (!provider) throw new NotFoundError('Provider not found');
      if (!user) throw new NotFoundError('user not found');
      if (user.role !== 'administrator') {
        throw new Error('you are not authorized to carry out this action');
      }
      return Provider.deleteOne({ _id: providerId })
        .catch((error) => {
          throw new SystemError('mongo error');
        })
        .then(() => {});
    });
};
