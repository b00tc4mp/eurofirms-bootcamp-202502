import { connect, disconnect } from '../data/index.js'
import { createRoutine } from './createRoutine.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return createRoutine('686cedebae501c877892f051', 'Press Banca', 'press banca 5 sets 70 kg, curl de biceps 4 sets 12 kg')
                .then(() => console.log('routine created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())