import mongoose from 'mongoose';
//Un esquema sirve para definir datos
const { Schema, model } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;
const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});
const post = new Schema({
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  likes: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
});

const User = model('User', user);
const Post = model('Post', post);

export { User, Post };
