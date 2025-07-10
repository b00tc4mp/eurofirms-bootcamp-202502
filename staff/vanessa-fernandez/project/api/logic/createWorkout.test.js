import { connect, disconnect } from '../data/index.js'
import { createWorkout } from './createWorkout.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return createWorkout('68600da856415f4c8796921f', 'Thursday', [{ exerciseId: '6867b283481f183bb93f69eb', sets: 3, repetitions: 12, restTime: 60 }, { exerciseId: '6867b234abc7b993549ea47a', sets: 3, repetitions: 12, restTime: 60 }] )
                .then(() => console.log('workout created'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())