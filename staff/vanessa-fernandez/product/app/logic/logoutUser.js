import { data } from '../data'

/**
 * Logs a user out of the system.
 */

export const logoutUser = () => {
    data.removeUserId()
}