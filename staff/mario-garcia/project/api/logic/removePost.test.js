import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {

        try {
            return removePost('685fed71e83cd82491583853', '686016046070c75ffa1fa105')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())