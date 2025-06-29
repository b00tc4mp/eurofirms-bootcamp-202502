import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return registerUser('Mos Quito', 'mos@quito.com', "mosquito", '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    }
)
.catch(error => console.error(error))
.finally(() => disconnect())