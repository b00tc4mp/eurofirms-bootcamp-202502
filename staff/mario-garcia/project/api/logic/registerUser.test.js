import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {
        try {
            return registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')
                .then(() => console.log('user registred'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())