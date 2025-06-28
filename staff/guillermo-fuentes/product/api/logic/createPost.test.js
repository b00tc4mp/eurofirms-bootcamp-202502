import { createPost } from './createPost.js';
import { connect, disconnect } from '../data/index.js';
import mongoose from 'mongoose';

connect('mongodb://localhost:27017/test')
  .then(() => {
    try {
      return createPost(
        '6830cb9b22525f24e06c4bd1',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlsNHcxMXp4cXVpcmhwODduMDNyZ2Q4ZXRldHo4YjFiODJpY3B5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cYZkY9HeKgofpQnOUl/giphy.gif',
        'perro feliz'
      )
        .then(() => console.log('post created'))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
