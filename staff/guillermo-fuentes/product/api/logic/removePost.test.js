import { removePost } from './removePost.js';
import { connect, disconnect } from '../data/index.js';

connect('mongodb://localhost:27017/test')
  .then(() => {
    try {
      return removePost('6830cb9b22525f24e06c4bd1', '683f4164b0ff61ce8b7872dc')
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
