import { data } from '../data'

/**
 * Gets whether user is logged in the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwise).
 */

//logica para ver si el usuario esta conectado (la doble negacion convierte un dato en booleano true/false)
export const isUserLoggedIn = () => !!data.getUserId()
