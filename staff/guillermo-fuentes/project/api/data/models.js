import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const user = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fechaRegistro: {
    type: Date,
    required: true,
    default: Date.now,
  },
  direccion: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['administrator', 'employee', 'client'],
    required: true,
    default: 'client',
  },
});
const proveedor = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  contacto: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  usuario: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
});
const User = model('User', user);
const Proveedor = model('Proveedor', proveedor);

export { User, Proveedor };
