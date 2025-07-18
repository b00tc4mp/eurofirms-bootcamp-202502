import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return getUserUsername()
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())