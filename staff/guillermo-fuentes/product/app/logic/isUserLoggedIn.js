import { data } from '../data';

/**Logica que comprueba si el usuario esta logueado*/
export const isUserLoggedIn = () => !!data.getUserId();
