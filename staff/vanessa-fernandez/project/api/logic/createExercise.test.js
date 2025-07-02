import { connect, disconnect } from '../data/index.js'
import { createExercise } from './createExercise.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try {
            return createExercise(
                'Push-up',
                'A basic upper - body strength exercise targeting chest, shoulders, and triceps.',
                'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg',
                'medium',
                'arms'
            )
                .then(() => console.log('exercise created'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())