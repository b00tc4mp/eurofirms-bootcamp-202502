import mongoose from 'mongoose';
import { User, Proveedor } from './models.js';
const { connect, disconnect } = mongoose;

export { connect, disconnect, User, Proveedor };
