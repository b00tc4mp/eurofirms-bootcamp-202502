import { connect, disconnect } from '../data/index.js';
import { addProvider } from './addProvider.js';
connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return addProvider(
        'Test SA1',
        'test1@test.com',
        'Calle test 31',
        '6857e3c3c94ecaebfb3d947a',
        'Juanjo Perez Lopez'
      )
        .then(() => console.log('Provider registered'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
