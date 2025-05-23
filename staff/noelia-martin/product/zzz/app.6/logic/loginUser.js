import { data } from '../data' //nuevo lo necesito

/**
 * Logs a user in the system.
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    //modificamos la variable de data.users que dejamos de usar por los usuarios guardados en localStorage
    const users = data.getUsers() //nuevo
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')


    //data.userId = user.id //antiguo, ahora utilizaremos los metodos creados en data
    data.setUserId(user.id) //recuerda, este metodo mete en sessionStorage el valor de userId

}
