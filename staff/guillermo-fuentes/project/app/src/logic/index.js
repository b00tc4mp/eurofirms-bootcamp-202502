import { deleteUser } from "./deleteUser";
import { updateUser } from "./updateUser";
import { getUsers } from "./getUsers";
import { getUsersByRol } from "./getUsersByRol";
import { isUserLoggedIn } from "./isUserLoggedIn";
import { loginUser } from "./loginUser";
import { logoutUser } from "./logoutUser";
import { registerUser } from "./registerUser";
import { getProviders } from "./getProviders";
import { addProvider } from "./addProvider";
import { getUsersSuggestions } from "./getUsersSuggestions";
import { updateProvider } from "./updateProvider";
import { deleteProvider } from "./deleteProvider";
import { getProducts } from "./getProducts";
import { addProduct } from "./addProduct";
import { getProvidersSuggestions } from "./getProvidersSuggestions";
import { updateProduct } from "./updateProduct";
import { deleteProduct } from "./deleteProduct";
import { getUserById } from "./getUserById";
import { isUserAdministrator } from "./isUserAdministrator";
import { isUserProvider } from "./isUserProvider";
import { isCurrentUser } from "./isCurrentUser";
export const logic = {
  loginUser,
  isUserLoggedIn,
  registerUser,
  getUsers,
  deleteUser,
  logoutUser,
  updateUser,
  getUsersByRol,
  getProviders,
  addProvider,
  getUsersSuggestions,
  updateProvider,
  deleteProvider,
  getProducts,
  addProduct,
  getProvidersSuggestions,
  updateProduct,
  deleteProduct,
  getUserById,
  isUserProvider,
  isUserAdministrator,
  isCurrentUser,
};
