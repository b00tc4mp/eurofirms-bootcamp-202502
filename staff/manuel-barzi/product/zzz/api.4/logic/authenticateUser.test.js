import { connect, disconnect } from '../data/index.js'
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return authenticateUser('peterpan', '012012012')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())

