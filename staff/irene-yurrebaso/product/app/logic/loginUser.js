import { data } from '../data'

/**
 * Logs a user in the system
 * 
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
 
export const loginUser = (username, password) => {
    
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

    //le decimos a data.js quién se ha conectado con el setter, y data decide donde se guarda (en sessionStorage en este caso)
    data.setUserId(user.id)
}
