import { registerUser } from './registerUser.js'
try {
    registerUser('Tony Stark', 'tonystark@ironman.com', 'ironman', '123123123')

    console.log('user registered')

} catch (error) {

    console.error(error)

}