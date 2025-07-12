import { connect, disconnect } from '../data/index.js'
import { createPlace } from './createPlace.js'

connect('mongodb://localhost:27017/infinity-test')
    .then(() => {
        return createPlace('68680e6deb57024a85a3565c', 'Early birds evening @ The Science Museum', 'museums', 'United Kingdom', 'London', 'Exhibition Rd, South Kensington, London SW7 2DD', 'https://www.sciencemuseum.org.uk/see-and-do/early-birds', '+44 033 0058 0058', 'Early Birds is a sensory friendly event for families with members who need a quieter environment to enjoy the museum.', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/db/af/3d/the-entrance-to-the-science.jpg?w=1000&h=-1&s=1')
            .then(() => console.log('place created'))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())