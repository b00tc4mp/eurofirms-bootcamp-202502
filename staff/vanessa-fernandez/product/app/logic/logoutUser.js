import { data } from '../data'

/**
 * Logs a user out of the system.
 */

const logoutUser = () => {
    data.removeUserId()
}