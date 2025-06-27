import { connect, disconnect } from '../data/index.js';
import { addProvider } from './addProvider.js';
connect('mongodb://localhost:27017/proyectoFinal')
  .then(() => {
    try {
      return addProvider("685ed8032072ce17a8a8e5b8","Prueba SA","741258963","Calle ejemplo 3","685ed7b5cc250d208b96432e")
        .then(() => console.log('Provider registered'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
