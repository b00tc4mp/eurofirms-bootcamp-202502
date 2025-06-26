import { connect, disconnect } from '../data/index.js';
import { updateUser } from './updateUser.js';

connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return updateUser(
        '6857e3c3c94ecaebfb3d947a',
        '685d7e3cf3767021029121e0',
        'Usuario actualizado',
        'direccion actualizada',
        'administrator',
        'usuario@actualizado.com',
        '12345678'
      )
        .then(() => console.log('user updated'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
