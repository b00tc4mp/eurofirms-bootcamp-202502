import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try{
            return registerUser('Ginny Weasly', 'ginny@weasly.com', 'ginnyw', '789789789')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())