import { connect, disconnect } from '../data/index.js'
import { removeWorkout } from './removeWorkout.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try {
            return removeWorkout('687159abfda0699f7d6b6c75', '68680523f4e2ad226f81f612')
                .then(() => console.log('workout removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())