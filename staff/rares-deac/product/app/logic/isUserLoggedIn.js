import { data } from '../data'

/**
 * Gets whether if user is logged in the system.
 * @returns {boolean} The state of user log (true if logged in, false otherwise)
 */

export const isUserLoggedIn = () => !!data.getToken()