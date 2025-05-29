import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getUserUsername('68388df3c874398c4c7aea4f')
                .then(username => console.log('username', username))
                .catch(error => console.error(error))

            console.log('username goten', username)
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())
