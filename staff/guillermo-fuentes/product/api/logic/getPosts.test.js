import { getPosts } from './getPosts.js';
import { connect, disconnect } from '../data/index.js';

connect('mongodb://localhost:27017/test')
  .then(() => {
    try {
      return getPosts('6830cb9b22525f24e06c4bd1')
        .then((posts) => {
          console.log('posts', posts);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
