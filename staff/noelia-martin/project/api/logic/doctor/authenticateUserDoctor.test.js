import { connect, disconnect } from '../../data/index.js' //nuevo
import { authenticateUserDoctor } from './authenticateUserDoctor.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return authenticateUserDoctor('manuelfacundoleon', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())