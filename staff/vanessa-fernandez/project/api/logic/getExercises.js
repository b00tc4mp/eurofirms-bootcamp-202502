import { Exercise } from '../data/index.js'
import { SystemError } from 'com'

export const getExercises = () => {
   return Exercise.find({}).select('-_v').lean()
    .catch(error => { throw new SystemError('mongo error') })
    .then(exercises => {
        return exercises
    })
}