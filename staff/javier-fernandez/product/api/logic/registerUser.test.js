import { registerUser } from './registerUser.js'

try {
    registerUser('pin 8', 'pin@8.com', 'pin8', '123123123')

    console.log('user registererd')
} catch (error) { 
    console.error(error)
}