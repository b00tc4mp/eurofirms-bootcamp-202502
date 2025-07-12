import { connect, disconnect } from '../data/index.js'
import { getPlaces } from './getPlaces.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        try {
            return getPlaces('6861798f500437c1d1f7373f')
                .then(places => console.log('places', places))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())