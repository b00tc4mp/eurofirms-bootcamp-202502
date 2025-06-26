import { connect, disconnect } from '../data/index.js';
import { removeProvider } from './removeProvider.js';
connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return removeProvider('685d83cd9bb685dd45882f94', '6857e3c3c94ecaebfb3d947a')
        .then(() => console.log('provider removed'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
