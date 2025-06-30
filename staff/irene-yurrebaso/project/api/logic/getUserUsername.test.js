import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        try {
            return getUserUsername('68600c77c831de7e0bd16422')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())