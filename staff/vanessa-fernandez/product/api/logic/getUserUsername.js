import { data } from '../data/index.js'

export const getUserUsername = userId => {
    if(typeof userId !== 'string') throw new Error ('Invalid userId type.')
    if(userId.length < 6) throw new Error('Invalid userId length.') 
    
    const users = data.getUsers()

    const user = users.find(user => user.id === userId)
    if(!user) throw new Error ('User not found.')

    return user.username    
}