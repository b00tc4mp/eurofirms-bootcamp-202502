import { connect, disconnect } from '../data/index.js' //nuevo
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            //const userId = authenticateUser('peterpan', '123123123') //userId lo devolviamos cuando trabajamos de manera sincrona
            //Al trabajar ahora de manera asincrona tenemos que hace que la logica lo devuelva en un .then
            return authenticateUser('petrpan', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())




// try {
//     const userId = authenticateUser('peterpan', '123123123')

//     console.log('user authenticated', userId)
// } catch (error) {
//     console.error(error)
// }
