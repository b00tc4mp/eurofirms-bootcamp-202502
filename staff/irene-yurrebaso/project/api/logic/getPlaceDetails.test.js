import { connect, disconnect } from '../data/index.js'
import { getPlaceDetails } from './getPlaceDetails.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        try {
            return getPlaceDetails('68600c77c831de7e0bd16422', '686cde07395faf16997e6a49')
                .then(place => console.log('place', place))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())