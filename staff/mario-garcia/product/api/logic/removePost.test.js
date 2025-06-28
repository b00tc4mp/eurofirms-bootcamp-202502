import { connect, disconnect } from '../data/index.js'
import { removePost } from './removePost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {

        try {

            return removePost('6831a2928ec561252a7d001a', '6831bf1e08eaf9600a6d584d')
                .then(() => console.log('post removed'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())