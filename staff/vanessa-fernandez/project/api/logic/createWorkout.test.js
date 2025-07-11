import { connect, disconnect } from '../data/index.js'
import { createWorkout } from './createWorkout.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return createWorkout('68600da856415f4c8796921f', 'Wednesday', [{ exerciseId: '6863e6548d5af9aabbe1e00c', sets: 3, repetitions: 12, restTime: 60 }, { exerciseId: '686502216a120eea74273efc', sets: 3, repetitions: 12, restTime: 60 }, { exerciseId: '6867ab05ae2800a088a697a1', sets: 3, repetitions: 12, restTime: 60 }, { exerciseId: '6867ab9832ed84dd30fdd9b5', sets: 3, repetitions: 12, restTime: 60 }, { exerciseId: '6867ac01a2e558eac7d2c8a2', sets: 3, repetitions: 12, restTime: 60}] )
                .then(() => console.log('workout created'))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())