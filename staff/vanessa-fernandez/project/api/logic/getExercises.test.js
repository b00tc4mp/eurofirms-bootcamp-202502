import { connect, disconnect } from '../data/index.js'
import { getExercises } from './getExercises.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return getExercises()
            .then(exercises => console.log('exercises gotten' , exercises))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())