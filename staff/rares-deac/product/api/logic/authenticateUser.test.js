import { authenticateUser } from './authenticateUser'

try {
    const userId = authenticateUser('peterpan', '123123123')

        console.log('user authenticated', userId)
}   catch (error) {
        console.error(error)
}