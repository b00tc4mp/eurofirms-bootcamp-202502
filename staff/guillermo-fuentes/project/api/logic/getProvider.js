import { Provider, User } from '../data/index.js';
import { NotFoundError, SystemError, validate } from 'com';

export const getProviders = (userId) => {
  validate.userId(userId);
  return User.findById(userId)
    .catch((error) => {
      throw new SystemError('mongo error');
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found');
      return Provider.find({}, '-__v')
        .lean()
        .populate('user', 'fullName _id')
        .catch((error) => {
          throw new SystemError('Error in mongo');
        })
        .then((providers) => {
          if (!providers || providers.length === 0) {
            throw new NotFoundError('Providers not found');
          }

          providers.forEach((provider) => {
            provider.id = provider._id.toString();
            delete provider._id;

            if (provider.user && provider.user._id) {
              provider.user.id = provider.user._id.toString();
              delete provider.user._id;
            }
          });

          return providers;
        });
    });
};
