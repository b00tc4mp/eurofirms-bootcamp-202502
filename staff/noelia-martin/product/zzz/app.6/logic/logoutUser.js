import { data } from '../data'


//creo una funcion para que una vez hace el usuario logOut, vacie el contenido de data.userId que recuerdo que era el id del usuario conectado

/**
 * Logs a user out of the system.
 */
export const logoutUser = () => {
    //data.userId = null //antiguo, ya no existe la propiedad userId ahora hay que usar un metodo de data que borra el contenido de SessionStorage
    data.removeUserId()
}