//import { data } from '../data/index.js'
import { User } from '../data/index.js' //queremos solo User del fichero index de data
import { ValidationError, SystemError, DuplicityError } from './errors.js'


//exactamente igual que en la app; ningun cambio ya que hemos nombrado los metodos que necesita de data igual que teniamos en app
/**
 * Registers a user in the system.
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new ValidationError('invalid name type')
    if (name.length < 1) throw new ValidationError('invalid name min length')
    if (name.length > 30) throw new ValidationError('invalid name max length')

    if (typeof email !== 'string') throw new ValidationError('invalid email type')
    if (email.length < 6) throw new ValidationError('invalid email min length')
    if (email.length > 30) throw new ValidationError('invalid email max length')

    if (typeof username !== 'string') throw new ValidationError('invalid username type')
    if (username.length < 3) throw new ValidationError('invalid username min length')
    if (username.length > 20) throw new ValidationError('invalid username max length')

    if (typeof password !== 'string') throw new ValidationError('invalid password type')
    if (password.length < 8) throw new ValidationError('invalid password min length')
    if (password.length > 20) throw new ValidationError('invalid password max length')

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000) throw new DuplicityError('user already exists') //filtro por este error que conocemos el code,porque que saldrá muchas veces y asi cambiamos el mensaje a uno personalizado

            throw new SystemError('mongo error')
            // console.error(error.message) //prueba para comprobar que si no lanzo el error no funciona el control de errores de la promesa then de conexion del test, me mete del tiron en su then y no mira el catch
        })
        .then(() => { })
}

//mantenemos solo las validaciones
//creamos un User como practicamos en el fichero populate.js,pero esta vez no escribimos nada en consola, lo escribirá quien llame a esta logica.
//El error que vamos a lanzar será creado por el constructor Error(). Esta vez no lo personalizamos.
//No lo personalizamos porque gracias a los schemas que hemos configurado pueden ser distintos errores
//En este caso no importaria si filtramos con message, ya que Error() no trae otras propiedades. Pero lo dejamos asi ya que en otras ocasiones las traerá y asi nos acostumbramos a este pequeño filtro. (manu lo dejó directamente sin message)

//antiguo
// const users = data.getUsers()
// const user = users.find(user => user.email === email || user.username === username)
// if (user) throw new Error('user already exists')
// let usersCount = data.getUsersCount()
// usersCount++
// users.push({
//     id: 'user-' + usersCount,
//     name: name,
//     email: email,
//     username: username,
//     password: password
// })
// data.setUsers(users)
// data.setUsersCount(usersCount)

//Ultima modificación de esta version: cambiamos la constructora de los errores a la que mejor interesen segun la situacion