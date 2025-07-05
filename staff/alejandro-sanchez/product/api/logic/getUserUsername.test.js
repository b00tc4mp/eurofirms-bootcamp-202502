import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getUserUsername('686581a8fcc8a50904d1d77c')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())