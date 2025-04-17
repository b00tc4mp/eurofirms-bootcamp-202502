import { data } from './data'

const registerUser = (name, email, username, password) => {
    //1. validar estos datos (ej. asegurarnos que son strings y dentro de longitud requerida)
    if(typeof name !== 'string') throw new Error('Invalid name type')
    if(name.length < 1) throw new Error('Invalid min name length')
    if(name.length > 30) throw new Error('Invalid max name length')

    if(typeof email !== 'string') throw new Error('Invalid email type')
    if(email.length < 6) throw new Error('Invalid min email length')
    if(email.length > 30) throw new Error('Invalid max email length')

    if(typeof username !== 'string') throw new Error('Invalid username type')
    if(username.length < 3) throw new Error('Invalid min username length')
    if(username.length > 30) throw new Error('Invalid max username length')

    if(typeof password !== 'string') throw new Error('Invalid password type')
    if(password.length < 8) throw new Error('Invalid min password length')
    if(password.length > 20) throw new Error('Invalid max password length')

    //2. ver si el usuario existe en la base de datos data.js
    for(var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if(user.email === email || user.username === username) throw new Error('User already exists')
    }

    //3. si usuario no existe, agregarlo a la bbdd
    data.usersCount++

    data.users.push({
        id: 'user-' + data.usersCount,
        name: name,
        email: email,
        username: username,
        password: password
    })
}

const loginUser = (username, password) => {
    
    //1. validar datos (ej. asegurarnos que son strings y dentro de longitud requerida)
    if(typeof username !== 'string') throw new Error('Invalid username')
    if(username.length < 3) throw new Error('Invalid min username length')
    if(username.length > 30) throw new Error('Invalid max username length')

    if(typeof password !== 'string') throw new Error('Invalid password type')
    if(password.length < 8) throw new Error('Invalid min password length')
    if(password.length > 20) throw new Error('Invalid max password length')
    
    //2. ver si el usuario existe en la base de datos
    //3. si existe dar paso a Home y si no existe lanzar error
    let user

    for (let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if(_user.username === username) {
            user = _user

            break
        }
    }

    if(user === undefined) throw new Error('user not found')
        
    if(user.password !== password) throw new Error('wrong credentials')

    //guardamos quien se ha conectado y lo pasamos a data.js
    data.userId = user.id
}

//logica para añadir nombre de usuario en la Home
const getUserUsername = () => {
    let user
    //buscar usuario en bbdd para traerme el username
    for(let i = 0; i < data.users.length; i++) {
        const _user = data.users[i]

        if(_user.id === data.userId) {
            user = _user

            break
        }
    }

    if(user === undefined) throw new Error('user not found')

    return user.username
}

//logica para poner que el usuario ya no esta conectado o log out
const logoutUser = () => {
    data.userId = null
}

//exportamos para poder usar esta logica con React. Creamos un objeto que incluye las funciones y exportamos
//Importante: "users" viene de data.js, hay que importarlo ahora para poder usarlo
export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    logoutUser
}
