import { connect, disconnect } from '../data/index.js'
import { getRoutines } from './getRoutines.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return getRoutines('686cedebae501c877892f051')
                .then(routines => console.log('routines', routines))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error) 
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())