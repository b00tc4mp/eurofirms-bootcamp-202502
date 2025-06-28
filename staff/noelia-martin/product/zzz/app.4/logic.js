import { data } from './data'

/**
 * Este tipo de comentario no es para mi, sino para mis compañeros, que les ayude a comprender mi codigo si lo van a utilizar
 * solo vamos a comentar la logica ya que es lo mas importante
 * @param {*} name 
 * @param {*} email 
 * @param {*} username 
 * @param {*} password 
 */
const registerUser = (name, email, username, password) => {
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

    for (let i = 0; i < data.users.length; i++) {
        var usuario = data.users[i]
        if (usuario.email === email || usuario.username === username) throw new Error('user already exists')
    }
    //nuevo, aumento el contador para general un numero nuevo en el id y utilizp push para añadir el nuevo usuario
    data.usersCount++

    data.users.push({
        id: 'user-' + data.usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })
    //modo antiguo
    // const usuarioAMeter = {
    //     name: name, email: email, username: username, password: password
    // }
    // data.users[data.users.length] = usuarioAMeter
}

const loginUser = (username, password) => {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 3) throw new Error('invalid username min length')
    if (username.length > 20) throw new Error('invalid username max length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password min length')
    if (password.length > 20) throw new Error('invalid password max length')

    //Antiguo, esta es mi version, con ella no guardo el objeto correspondiente al usuario que estoy evaluando, solo guardo si es correcto o no.

    // let datoCorrecto = false
    // for (let i = 0; i < data.users.length; i++) {
    //     const usuario = data.users[i]
    //     if (usuario.username === username && usuario.password === password) {
    //         datoCorrecto = true;
    //         break
    //     }
    // }
    // if (datoCorrecto == false) throw new Error('Usuario o contraseña incorrecta')

    //Como con mi version no tengo el objeto del usuario, voy a utilizar la del profesor
    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong credentials')

    //nuevo, guardo el valor de la variable id en userId para saber quien es el usuario conectado
    data.userId = user.id
}

//creo una funcion para conseguir el nombre del usuario
const getUserUsername = () => {
    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if (_user.id === data.userId) {
            user = _user //guardo en user, los campos del usuario que esta conectado
            break
        }
    }

    if (user === undefined) throw new Error('user not found')

    return user.username //devuelvo el campo username
}

//creo una funcion para que una vez hace el usuario logOut, vacie el contenido de data.userId que recuerdo que era el id del usuario conectado
const logoutUser = () => {
    data.userId = null
}

//creo una funcion que recoge de la base de datos todos los post y los devuelve, pero en estado inverso ya que normalmente los post deben ir de mas actual a menos
const getPosts = () => {
    return data.posts.toReversed()
}
//nuevo, añado todas las nuevas funciones creadas al objeto logic para que puedan ser utilizadas en otros componentes
export const logic = {
    registerUser, loginUser, getUserUsername, logoutUser, getPosts
}