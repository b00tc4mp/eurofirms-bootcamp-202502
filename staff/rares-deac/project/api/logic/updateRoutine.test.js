import { connect, disconnect } from '../data/index.js'
import { updateRoutine } from './updateRoutine.js'

connect('mongodb://localhost:27017/YourFitStyle')
    .then(() => {
        try {
            return updateRoutine('68767e7af10586248aaa339b','68768bdaf10586248aaa34eb', 'Hoy es lunes', 'press banca 2x2020kg 4 sets')
                .then(() => console.log('routine updated'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())