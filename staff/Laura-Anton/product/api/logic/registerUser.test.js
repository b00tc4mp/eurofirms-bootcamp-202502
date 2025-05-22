import { registerUser } from './registerUser.js'

try {
    registerUser('Manolo', 'pin@4.com', 'pin4', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}

