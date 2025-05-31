import { getUserUsername } from './getUserUsername.js'

try {
    const username = getUserUsername('user-10')

    console.log('username gotten', username) //con esto hay que decirle a la logica que debe retornar el username del Id del usuario indicado
} catch (error) {
    console.error(error)
}
//para esta logica comenzamos escribiendo su test y luego la logica