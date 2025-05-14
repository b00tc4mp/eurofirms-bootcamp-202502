import { registerUser } from './registerUser.js'

try {
    registerUser('Dani', 'dani@dani.com', 'Daniel', '123123123')

    console.log('user registered')
}catch (error) {
    console.error(error)
}  