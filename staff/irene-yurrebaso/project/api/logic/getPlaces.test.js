import { connect, disconnect } from '../data/index.js'
import { getPlaces } from './getPlaces.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        try {
            return getPlaces('68600c77c831de7e0bd16422')
                .then(places => console.log('places', places))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())