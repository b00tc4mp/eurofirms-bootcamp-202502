import { removePost } from './removePost.js';
import { connect, disconnect } from '../data/index.js';

connect('mongodb://localhost:27017/test')
  .then(() => {
    try {
      return removePost('6830cb9b22525f24e06c4bd1', '6834b3ce3bab80c3c0f0cbb8')
        .then(() => {
          console.log('post deleted succesfully');
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
