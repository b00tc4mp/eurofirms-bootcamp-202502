import { authenticateUser } from './authenticateUser.js';

import { getUsers } from './getUsers.js';
import { registerUser } from './registerUser.js';
import { removeUser } from './removeUser.js';

import { getUsersByRol } from './getUsersByRol.js';
import { addProvider } from './addProvider.js';
import { deleteProveedor } from './deleteProveedor.js';
import { updateProvider } from './updateProvider.js';
import { updateUser } from './updateUser.js';
export const logic = {
  registerUser,
  authenticateUser,
  removeUser,
  getUsers,
  updateUser,
  getUsersByRol,
  addProvider,
  deleteProveedor,
  updateProvider,
};
