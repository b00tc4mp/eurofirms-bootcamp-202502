import { getUserUsername } from './getUserUsername.js'

try {
    const username = getUserUsername('user-1')
    
    console.log('username goten', username)
} catch (error) {
    console.log(error)
}