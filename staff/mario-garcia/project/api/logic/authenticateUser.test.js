import { connect, disconnect } from '../data/index.js'
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {
        try {
            return authenticateUser('spiderman', '123123123')
                .then(user => console.log('user authenticated', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())