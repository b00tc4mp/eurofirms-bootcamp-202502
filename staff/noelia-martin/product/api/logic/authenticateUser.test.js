import { authenticateUser } from './authenticateUser.js'

try {
    //la logica de authenticateUser devuelve el id del usuario, no lo almacena en ningun archivo, simplemente lo devuelve. Asi que aqui lo recogemos en memoria para mostrarlo en consola y asi comprobar que todo ha funcionado bien
    const userId = authenticateUser('peterpan', '123123123')

    console.log('user authenticated', userId)
} catch (error) {
    console.error(error)
}
//este test es muy parecido al de logica de registro pero devolvemos el userId, mientras que logic solo un mensaje de usuario registrado