import { registerUser } from './registerUser.js'

try {
    registerUser('Pin 8', 'pin@8.com', 'pin8', '123123123')

        console.log('user registered')
}   catch (error) {
        console.error(error)
}