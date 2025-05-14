import { getUserUsername} from './getUserUsername.js'

try {
    const username = getUserUsername('user-4')

    console.log('username gotten', username)
} catch (error) {
    console.error(error)
}