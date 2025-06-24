import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return getUserUsername('68595ebadbc9366fcc70d3b8')
            .then(username => console.log('username gotten ', username))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())