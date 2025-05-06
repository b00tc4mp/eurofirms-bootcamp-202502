import { data } from '../data' 

/**
 * Gets whether user is logged in the system.
 * 
 * @returns {boolean} The state os user log (true if logged in, false otherwise).
 */
export const isUserLoggedIn = () => !!data.getUserId()