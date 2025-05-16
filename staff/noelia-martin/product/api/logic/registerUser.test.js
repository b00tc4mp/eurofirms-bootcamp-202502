import { registerUser } from './registerUser.js'

//siempre que hacemos pruebas de logicas, try/catch
try {
    registerUser('Pin 8', 'pin@8.com', 'pin8', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}

//ejecutamos test con node. Si ha funcionado miramos el fichero data de usersCount(debe haber incrementado en uno) y users(debe estar pin8)