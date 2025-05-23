import { data } from '../data'

//creo una funcion para conseguir el nombre del usuario

/**
 * Gets the user username.
 * 
 * @returns {string} The user username.
 */
export const getUserUsername = () => {
    const users = data.getUsers()//nuevo y lo utilizo en el resto del codigo(modifico data.users por users)
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.id === data.getUserId()) { //cambio userId ya que esa propiedad no la tenemos y utilizamos el metodo getUserId() que creamos en data
            user = _user
            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    return user.username //devuelvo el campo username
}