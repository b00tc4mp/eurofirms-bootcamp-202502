import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return registerUser('marcosgarciaperez', '123123123', 'Marcos Garcia Perez', 'AN123456789', '01/01/2010')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => {
        throw new Error('Se ha producido un error de conexion!!!!')
    })
    .catch(error => { console.error(error.message) })
    .finally(() => disconnect())
