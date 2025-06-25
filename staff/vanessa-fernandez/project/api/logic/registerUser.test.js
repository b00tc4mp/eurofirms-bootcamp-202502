import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try {
            return registerUser('Harry Potter', 'harry@potter.com', 'harryP', '123123123')
            .then(() => console.log('user registered'))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())