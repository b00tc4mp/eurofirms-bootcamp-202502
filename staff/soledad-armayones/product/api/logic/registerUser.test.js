import { registerUser } from './registerUser.js'

try {
    registerUser('bestia', 'bestia@gmail.com', 'palacio', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}