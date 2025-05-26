import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {

        try {

            return getUserUsername('683338c87dd64f2bee44d1f6')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())