import { Provider } from '../data/index.js';
import { NotFoundError, SystemError } from 'com';

export const getProviders = () => {
  return Provider.find()
    .lean()

    .catch((error) => {
      throw new SystemError('Error in MongoDB');
    })
    .then((providers) => {
      if (!providers || providers.length === 0) {
        throw new NotFoundError('Users not found');
      }

      providers.forEach((provider) => {
        provider.id = provider._id.toString();
        delete provider._id;
        delete provider.__v;
      });

      return providers;
    });
};
