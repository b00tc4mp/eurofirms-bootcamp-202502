import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try{
            return getUserUsername('6832c5beb3e33cbb45b5adbe')
            .then(username => console.log('username gotten', username))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
.catch(error => console.error(error))
.finally(() => disconnect())