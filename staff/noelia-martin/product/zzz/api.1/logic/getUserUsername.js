import { data } from '../data/index.js'

/**
 * Returns the username of the user to find by user id.
 * 
 * @param {string} userId The user id.
 */
export const getUserUsername = userId => {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 6) throw new Error('invalid userId length')

    // search user with this userId
    // if user not found then throw error
    // if user found then return username

    const users = data.getUsers() //nos traemos los usuarios de la base de datps, es decir del fichero JSON

    const user = users.find(user => user.id === userId) //utilizamos el metodo aprendido en la ultima version de app. Sacamos los datos del usuario que coincide con el id pasado en la funcion de la logica

    if (!user) throw new Error('user not found') //una ultima validacion

    return user.username //retornamos solo el username
}
//esta logica no es copiada de app. En esta logica, como en cualquier otra, comenzamos validando datos y finalizamos realizando lo que pide nuestro test
//esta logica hace lo mismo que la logica de app , pero como no tenemos una base de datos con el userId ( ya no se guarda en las APIs) lo tenemos que recibir como paramentro de entrada