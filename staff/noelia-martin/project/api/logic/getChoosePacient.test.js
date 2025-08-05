import { getChoosePacient } from './getChoosePacient.js'
import { connect, disconnect } from '../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getChoosePacient('AN123456789')
                .then(id => console.log('Nombre del paciente :', id))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())