import { data } from '../data'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username
 */

//logica para añadir nombre de usuario en la Home
export const getUserUsername = () => {
    //traigo los usuarios de la bbdd, en este caso reconvertimos a array el string almacenado en localStorage
    const users = data.getUsers() 

    let user
    //buscar usuario en bbdd para traerme el username
    for(let i = 0; i < users.length; i++) {
        const _user = users[i]

        //comprueba si el id es el mismo que el id del usuario conectado, q ahora se consigue con el getter
        if(_user.id === data.getUserId()) {
            user = _user

            break
        }
    }

    if(user === undefined) throw new Error('user not found')

    return user.username
}