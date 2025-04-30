import { data } from '../data'

/**
 * Logs a user out og the system.
 */
export const logoutUser = () => data.removeUserId()