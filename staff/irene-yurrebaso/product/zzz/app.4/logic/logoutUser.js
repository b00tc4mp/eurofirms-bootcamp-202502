import { data } from '../data'

/**
 * Logs a user out of the system.
 */

//logica para poner que el usuario ya no esta conectado o log out
export const logoutUser = () => data.removeUserId()