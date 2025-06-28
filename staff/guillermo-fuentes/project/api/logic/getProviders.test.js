import { connect, disconnect } from '../data/index.js';
import { getProviders } from './getProvider.js';
connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return getProviders('68570c3e11cb0b356fedc67d')
        .then((providers) => console.log('Providers', providers))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
