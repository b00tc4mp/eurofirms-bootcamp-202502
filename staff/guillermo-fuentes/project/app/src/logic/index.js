import { deleteUser } from './deleteUser';
import { updateUser } from './updateUser';
import { getUsers } from './getUsers';
import { getUsersByRol } from './getUsersByRol';
import { isUserLoggedIn } from './isUserLoggedIn';
import { loginUser } from './loginUser';
import { logoutUser } from './logoutUser';
import { registerUser } from './registerUser';
import { getProviders } from './getProviders';
import { addProvider } from './addProvider';
import { fetchSuggestions } from './fetchSuggestions';
import { updateProvider } from './updateProvider';

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
  fetchSuggestions,
  updateProvider,
};
