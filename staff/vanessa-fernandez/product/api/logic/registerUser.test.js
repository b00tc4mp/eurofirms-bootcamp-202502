import { registerUser } from './registerUser.js'

try {
    registerUser('Harry Potter', 'harry@potter.com', 'harrypotter', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}