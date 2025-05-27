import moongoose from 'mongoose';
import { User, Post } from './models.js';
const { connect, disconnect } = moongoose;
export { connect, disconnect, User, Post };
