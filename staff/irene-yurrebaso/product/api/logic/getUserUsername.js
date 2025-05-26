import { User } from '../data/index.js'

/**
* Returns the username of user by the userId
*
*@param { string } userId The user id. 
*/
export const getUserUsername = userId => {
    if(typeof userId !== 'string') throw new Error('invalid userId type')
    if(userId.length < 6) throw new Error('invalid userId length')

    //metodo rapido para buscar por Id
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')
            
            return user.username
        })
}