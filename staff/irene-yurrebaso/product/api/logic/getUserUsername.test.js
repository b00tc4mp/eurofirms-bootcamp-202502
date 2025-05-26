import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            //ponemos return para que enlace con el catch y finally de afuera
            return getUserUsername('6830cf525c2e4339ab6c4bd7')
                .then(username => console.log('username gotten', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())