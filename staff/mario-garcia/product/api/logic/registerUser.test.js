import { registerUser } from './registerUser.js'
try {
    registerUser('Ala Ddin', 'ala@ddin.com', 'aladdin', '123123123')

    console.log('user registered')

} catch (error) {

    console.error(error)

}