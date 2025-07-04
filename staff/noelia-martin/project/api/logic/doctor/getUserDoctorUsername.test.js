import { getUserDoctorUsername } from './getUserDoctorUsername.js'
import { connect, disconnect } from '../../data/index.js'

connect('mongodb://localhost:27017/test-ChildHealthDocument')
    .then(() => {
        try {
            return getUserDoctorUsername('68670edf00369d7c4bfed515')
                .then(username => console.log('username gotten', username))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())


