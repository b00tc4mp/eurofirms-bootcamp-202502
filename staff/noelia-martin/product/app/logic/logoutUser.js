import { data } from '../data'


//creo una funcion para que una vez hace el usuario logOut, vacie el contenido de data.userId que recuerdo que era el id del usuario conectado

/**
 * Logs a user out of the system.
 */
export const logoutUser = () => {
    //cambiamos el metodo removeUserId() por removeToken()
    data.removeToken()
}