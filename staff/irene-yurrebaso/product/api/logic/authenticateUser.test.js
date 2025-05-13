import { authenticateUser } from "./authenticateUser.js"

try {
    const userId = authenticateUser('wendydarling', '123123123')

    console.log('user authenticated', userId)
} catch (error) {
    console.error(error)
}