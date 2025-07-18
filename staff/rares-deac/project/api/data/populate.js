import mongoose from 'mongoose'
import { User, Routine} from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {

        return Routine.find({})
            .catch(error => { throw new Error(error.message) })
            .then(routines => console.log('routines', routines))

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())