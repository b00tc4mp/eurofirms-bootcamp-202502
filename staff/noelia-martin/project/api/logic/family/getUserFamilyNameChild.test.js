import { getUserFamilyNameChild } from './getUserFamilyNameChild.js'
import { connect, disconnect } from '../../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getUserFamilyNameChild('68670be5198e3f1e7da2c0be')
                .then(nameChild => console.log('username gotten', nameChild))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())