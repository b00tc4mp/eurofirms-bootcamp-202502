import { data } from '../data/index.js'
/**
 * RETORNAMOS el Username del Usuario encontrado con UserId
 * 
 * @param {string} userId The user id.
 * 
 */

export const getUserUsername = userId => {

    if (typeof userId !== 'string') throw new Error('Invalid userId type')
    if (userId.length < 6) throw new Error('Invalid userId length')

    //Buscamos el User con el userId
    //NO encontramos el Usuario - LANZAMOS ERROR
    //SI encontramos el Usuario - Devolvemos el Username

    const users = data.getUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    return user.username

}