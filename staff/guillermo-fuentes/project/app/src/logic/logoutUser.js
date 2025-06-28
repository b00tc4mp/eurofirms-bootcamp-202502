import { data } from '../data';

//Logica para cerrar sesion  ha un usuario
export const logoutUser = () => {
  data.removeToken();
};
