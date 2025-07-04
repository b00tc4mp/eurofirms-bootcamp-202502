import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {

        try {

            return getUserUsername('68599b4c1fede4cdec0ccf8b')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())