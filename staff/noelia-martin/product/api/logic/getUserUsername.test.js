import { getUserUsername } from './getUserUsername.js'
import { connect, disconnect } from '../data/index.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return getUserUsername('6831d3e93e06d0b7063554f7')
                .then(username => console.log('username gotten', username))
                .catch(error => console.error(error))
        }
        catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
    .finally(() => disconnect())




// try {
//     const username = getUserUsername('user-10')
//     console.log('username gotten', username)
// } catch (error) {
//     console.error(error)
// }
