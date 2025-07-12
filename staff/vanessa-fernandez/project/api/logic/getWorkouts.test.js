import { connect, disconnect } from '../data/index.js'
import { getWorkouts } from './getWorkouts.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return getWorkouts('686566091ab4970c7b7531de', 'Monday')
            .then(workout => console.log('workout gotten', workout))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())