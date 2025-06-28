import { connect, disconnect } from '../data/index.js'
import { createProfile } from './createProfile.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try {
            return createProfile('68600da856415f4c8796921f', 'female', 50, 150)
            .then(() => console.log('profile completed'))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())