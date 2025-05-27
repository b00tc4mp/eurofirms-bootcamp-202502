import { getUserUsername } from './getUserUsername.js';
import { connect, disconnect } from '../data/index.js';

connect('mongodb://localhost:27017/test')
  .then(() => {
    try {
      return getUserUsername('6834add9f3638e5133bef691')
        .then((username) => {
          console.log('user', username);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
