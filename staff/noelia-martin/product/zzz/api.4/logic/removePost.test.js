import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return removePost('68396d30fe24a5b43ab3bcc3', '683a0f03b4b3d716c7be31d4')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())
