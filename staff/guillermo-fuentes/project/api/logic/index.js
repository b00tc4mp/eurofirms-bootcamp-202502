import { authenticateUser } from './authenticateUser.js';

import { getUsers } from './getUsers.js';
import { registerUser } from './registerUser.js';
import { removeUser } from './removeUser.js';

import { getUsersByRol } from './getUsersByRol.js';
import { addProveedor } from './addProveedor.js';
import { deleteProveedor } from './deleteProveedor.js';
import { editarProveedor } from './editarProveedor.js';
import { updateUser } from './updateUser.js';
export const logic = {
  registerUser,
  authenticateUser,
  removeUser,
  getUsers,
  updateUser,
  getUsersByRol,
  addProveedor,
  deleteProveedor,
  editarProveedor,
};
