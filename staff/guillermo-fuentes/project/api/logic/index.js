import { authenticateUser } from './authenticateUser.js';

import { getUsers } from './getUsers.js';
import { registerUser } from './registerUser.js';
import { removeUser } from './removeUser.js';
import { editarUsuario } from './editarUsuario.js';
import { getUsersByRol } from './getUsersByRol.js';
import { addProveedor } from './addProveedor.js';
import { deleteProveedor } from './deleteProveedor.js';
import { editarProveedor } from './editarProveedor.js';
export const logic = {
  registerUser,
  authenticateUser,
  removeUser,
  getUsers,
  editarUsuario,
  getUsersByRol,
  addProveedor,
  deleteProveedor,
  editarProveedor,
};
