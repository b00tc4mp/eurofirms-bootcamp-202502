import { getUserDoctorChooseChild } from './getUserDoctorChooseChild.js'
import { connect, disconnect } from '../../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getUserDoctorChooseChild('AN123456789')
                .then(userFamily => console.log('Nombre del paciente :', userFamily.id, userFamily.nameChild))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())