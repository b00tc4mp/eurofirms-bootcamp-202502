import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getUserUsername('683ca64482763a6ba3da5630')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())