import { getNamePacient } from './getNamePacient.js'
import { connect, disconnect } from '../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getNamePacient('6869568e08e94c675a9999d4')
                .then(nameChild => console.log('username gotten', nameChild))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())