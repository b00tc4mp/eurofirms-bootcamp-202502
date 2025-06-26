import { connect, disconnect } from '../data/index.js';
import { updateProvider } from './updateProvider.js';

connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return updateProvider(
        '68570d53c8e471f2770d24dc',
        '685d754c88eed2c3173a46f5',
        'Test actualizado',
        'test actualizado contact',
        'calle actualizada',
        '685d754c88eed2c3173a46f5'
      )
        .then(() => console.log('Provider updated'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
