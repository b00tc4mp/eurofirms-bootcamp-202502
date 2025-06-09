import { data } from '../data'

//Con !! convertimos cualquier Elemento en BOOLEANO

/**
 * Gets whether user is Logged In the system.
 * 
 * @returns {boolean} The state of User LOG (True if LoggedIn - False if LoggedOut)
 */
export const isUserLoggedIn = () => !!data.getUserId()