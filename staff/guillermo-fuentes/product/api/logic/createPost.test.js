import { createPost } from './createPost.js';
try {
  createPost(
    'user-20',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc253bHU1eGEwMmgzc3JleG91YTlvbnZlbHdvM2l6aWlvbzR6dGI2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GkFAwLd8R55ZSfLNFC/giphy.gif',
    'hola'
  );
  console.log('Post creado');
} catch (error) {
  console.error(error);
}
