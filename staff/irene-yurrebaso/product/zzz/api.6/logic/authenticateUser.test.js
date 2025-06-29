import { connect, disconnect } from '../data/index.js'
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            //autenticamos, nos esperamos, si toda va bien en .then recibiremos el Id del usuario
            //ponemos return para encadenar este bloque con el .catch y .finally de afuera
            return authenticateUser('peterpan', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())