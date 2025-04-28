import { data } from '../data'

/**
 * Gets wheter user is logged in the system.
 * 
 * @returns {boolean} The state of user log (true if logged in, false otherwise).
 */


export const isUserLoggedIn = () => { //comprueba si usuario esta logeado o no
    !!data.getUserId() // atención a la doble negación
}