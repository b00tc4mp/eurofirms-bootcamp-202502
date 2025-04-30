import { data } from '../data'

/**
 * Gets whether user is logegd out i the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwse).
 */
export const isUserLoggedIn = () => !!data.getUserId()