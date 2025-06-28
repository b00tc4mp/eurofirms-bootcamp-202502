import { data } from '../data'

/**
 * Gets whether user is Logged In the system.
 * 
 * @returns {boolean} The state of User LOG (True if LoggedIn - False if LoggedOut)
 */

export const isUserLoggedIn = () => !!data.getToken()