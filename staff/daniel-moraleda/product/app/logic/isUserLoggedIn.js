import { data } from '../data'

/**
 * Gets whether user is logegd out in the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwise).
 */
export const isUserLoggedIn = () => !!data.getToken()