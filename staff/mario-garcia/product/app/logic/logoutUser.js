import { data } from '../data'

/**
 * Logs a User out of the system.
 */
export const logoutUser = () => {

    data.removeUserId()

}