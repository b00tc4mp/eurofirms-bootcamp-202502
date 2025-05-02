import { data } from '../data'

//is: este tipo de consultas esperamos que el valor devuelvo sea un booleano
//¿Hay usuarios en SessionStorage?

/**
 * Gets whether user is logged in the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwise).
 */
export const isUserLoggedIn = () => !!data.getUserId()