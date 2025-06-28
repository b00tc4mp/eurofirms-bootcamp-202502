import { registerUser } from './registerUser.js'

try {
    registerUser('Hermione Granger', 'hermione@granger.com', 'hermionegranger', '456456456')

    console.log('user registered')
} catch (error) {
    console.error(error)
}