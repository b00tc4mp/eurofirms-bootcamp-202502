import { registerUser } from './registerUser.js';
import { connect, disconnect } from '../data/index.js';

connect('mongodb://localhost:27017')
  .then(() => {
    try {
      return registerUser('Pepito Grillo', 'pepito@grillo.com', 'pepito', '12345678')
        .then(() => console.log('user registered'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
