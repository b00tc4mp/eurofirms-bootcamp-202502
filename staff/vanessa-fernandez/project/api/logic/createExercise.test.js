import { connect, disconnect } from '../data/index.js'
import { createExercise } from './createExercise.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try {
            return createExercise(
                'Smith machine bent-over row (pronated grip)',
                'A back-strengthening row performed on the Smith machine using an overhand grip.',
                'https://www.inspireusafoundation.org/wp-content/uploads/2023/01/smith-machine-row.gif',
                'medium',
                'back'
            )
                .then(() => console.log('exercise created'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())