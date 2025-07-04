import { getUserFamilyUsername } from './getUserFamilyUsername.js'
import { connect, disconnect } from '../../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getUserFamilyUsername('68670be5198e3f1e7da2c0be')
                .then(username => console.log('username gotten', username))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())