import { data } from '../data'

/**
 * Gets the user username.
 * 
 * @returns {string} The user username
 */

//logica para añadir nombre de usuario en la Home
export const getUserUsername = () => {
    let user
    //buscar usuario en bbdd para traerme el username
    for(let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        //comprueba si el id es el mismo que el id del usuario conectado, q ahora se consigue con el getter
        if(_user.id === data.getUserId()) {
            user = _user

            break
        }
    }

    if(user === undefined) throw new Error('user not found')

    return user.username
}