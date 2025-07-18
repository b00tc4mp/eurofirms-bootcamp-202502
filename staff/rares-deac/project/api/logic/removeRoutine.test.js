import { connect, disconnect } from '../data/index.js'
import { removeRoutine } from './removeRoutine.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return removeRoutine('686cedebae501c877892f051','6872396ec6b7cbdbaa622544')
                .then(() => console.log('routine removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())