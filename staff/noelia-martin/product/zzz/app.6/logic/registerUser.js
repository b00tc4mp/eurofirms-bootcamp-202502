import { data } from '../data'

/**
 * Este tipo de comentario no es para mi, sino para mis compañeros, que les ayude a comprender mi codigo si lo van a utilizar
 * solo vamos a comentar la logica ya que es lo mas importante
import { data } from '../data'
*/

/** 
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name min length')
    if (name.length > 30) throw new Error('invalid name max length')

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email min length')
    if (email.length > 30) throw new Error('invalid email max length')

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    //modificamos este for, para que coja los datos de usuario que necesita del LocalStore
    const users = data.getUsers() //nuevo
    //modifico los antiguos data.users por la nueva variable creada: users
    for (let i = 0; i < users.length; i++) {
        var usuario = users[i]
        if (usuario.email === email || usuario.username === username) throw new Error('user already exists')
    }
    //idem que hice con users, lo hago con count
    let usersCount = data.getUsersCount()//nuevo
    usersCount++

    users.push({
        id: 'user-' + usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })
    //nuevo, tengo que decirle que el nuevo valor de contador y los nuevos push se metan en LocalStorage
    data.setUsers(users)
    data.setUsersCount(usersCount)
}
/*explicación resumida: nos traemos con getUsers una copia del JSON convertido en array para poder trabajar con el
registramos un usuario y actualizamos este array
por ultimo le decimos con setUsers que coga el array(ya modificado), lo convierta a JSON y lo meta en localStorage, al hacer eso se machaca lo que habia alli y entra mi nuevo array*/