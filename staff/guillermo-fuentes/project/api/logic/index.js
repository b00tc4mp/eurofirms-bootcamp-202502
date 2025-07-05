import { authenticateUser } from "./users/authenticateUser.js";

import { getUsers } from "./users/getUsers.js";
import { registerUser } from "./users/registerUser.js";
import { removeUser } from "./users/removeUser.js";

import { getUsersByRol } from "./users/getUsersByRol.js";
import { addProvider } from "./providers/addProvider.js";

import { updateProvider } from "./providers/updateProvider.js";
import { updateUser } from "./users/updateUser.js";
import { getProviders } from "./providers/getProvider.js";
import { searchUsers } from "./users/searchUsers.js";
import { removeProvider } from "./providers/removeProvider.js";
import { addProduct } from "./product/addProduct.js";
import { updateProduct } from "./product/updateProduct.js";
import { removeProduct } from "./product/removeProduct.js";
export const logic = {
  registerUser,
  authenticateUser,
  removeUser,
  getUsers,
  updateUser,
  getUsersByRol,
  addProvider,
  removeProvider,
  updateProvider,
  getProviders,
  searchUsers,
  addProduct,
  updateProduct,
  removeProduct,
};
