import { connect, disconnect } from '../data/index.js'
import { removePlace } from './removePlace.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        try {
            return removePlace('6861798f500437c1d1f7373f', '6868dbbe20a8dbb90d71b3ed')
                .then(() => console.log('place removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())