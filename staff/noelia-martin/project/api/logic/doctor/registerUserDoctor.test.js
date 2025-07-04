import { connect, disconnect } from '../../data/index.js'
import { registerUserDoctor } from './registerUserDoctor.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return registerUserDoctor('manuelfacundoleon', '123123123')
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