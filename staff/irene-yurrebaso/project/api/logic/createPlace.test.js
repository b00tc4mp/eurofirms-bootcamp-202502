import { connect, disconnect } from '../data/index.js'
import { createPlace } from './createPlace.js'

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return createPlace('6861798f500437c1d1f7373f', 'Gloria Thalasso & Hotels', 'hotels', 'Spain', 'San Bartolomé de Tirajana', 'C/ Las Margaritas s/n 35100, Las Palmas', 'https://www.gloriapalaceth.com/en/autism-friendly/', '+34 928 12 86 40', 'We are aware of the difficulties that people with autism and their families face in their daily life. For this reason, GLORIA THALASSO & HOTELS chain has been certified as an AUTISM FRIENDLY place, so that you can feel welcome in any of our hotels.', 'https://content.tui.co.uk/adamtui/2017_9/14_9/6e1bc27e-0bd9-4552-af09-a7ee00961828/ACC_031945_GCA_15WebOriginalCompressed.jpg?i10c=img.resize(width:470);img.crop(width:470%2Cheight:265)')
            .then(() => console.log('place created'))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())