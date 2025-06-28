import mongoose from 'mongoose';
import { User, Post } from './models.js';

const { connect, disconnect } = mongoose;

connect('mongodb://localhost:27017/test')
  .then(() => {
    // const user = new User({
    //   name: 'A Kira',
    //   email: 'a@kira.com',
    //   username: 'akira',
    //   password: '12345678',
    // });
    // return user
    //   .save()
    //   .catch(() => {
    //     throw new Error('mongo error');
    //   })
    //   .then(() => console.log('user saved'));
    // return User.deleteOne({ _id: '6830cb3922525f24e06c4bd0' })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then(() => console.log('user deleted'));
    // return User.updateOne({ _id: '6831ce381224df86c1da5ff1' }, { $set: { password: '87654321' } })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then(() => console.log('user updated'));
    // return User.find({})
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then((users) => console.log('users', users));
    // return User.create({
    //   name: 'Michel Angelo',
    //   email: 'michel@angelo.com',
    //   username: 'michelangelo',
    //   password: '12345678',
    // })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then(() => console.log('user create'));
    // return Post.create({
    //   author: '6831d3e9e716e2e3bda270cc',
    //   image:
    //     'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDVsNWY1d3h5M2Q4NXJ0a3MzZnl0end5aXducWNyaXdocXV0MTNjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.gif',
    //   text: 'Esto feliz en el trabajo',
    // })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then(() => console.log('post created'));

    // return Post.deleteOne({ _id: '6831d55c240719e7cb163c37' })
    //   .catch((error) => {
    //     throw new Error(error.message);
    //   })
    //   .then(() => console.log('post deleted'));

    return Post.find({})
      .catch((error) => {
        throw new Error(error.message);
      })
      .then((posts) => console.log('posts', posts));
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
