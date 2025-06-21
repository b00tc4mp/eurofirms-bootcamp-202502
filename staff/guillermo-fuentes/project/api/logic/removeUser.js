import { User } from '../data/index.js';
import { ValidationError, NotFoundError, SystemError } from '../errors.js';

export const removeUser = (userId, adminId) => {
  if (typeof userId !== 'string') throw new ValidationError('user id invalid');

  return Promise.all([User.findOne({ _id: userId }), User.findOne({ _id: adminId })])
  .then(([user, admin]) => {
    if (!user) throw NotFoundError('user not found');
    if (!admin) throw NotFoundError('admin not found');
    if (admin.rol === 'administrador') {
      return User.deleteOne({ _id: userId }).catch(() => {
        throw new SystemError('Mongo error');
      });
    } else {
      throw new Error('Este usuario no esta autorizado para esta operacion');
    }
  });
};
