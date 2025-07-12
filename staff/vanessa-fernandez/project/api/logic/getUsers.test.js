import { connect, disconnect } from '../data/index.js'
import { getUsers } from './getUsers.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return getUsers()
            .then(users => {
                console.log('Users found: ', users.length)

                users.forEach(user => {
                    console.log(`- ${user.name} (${user.username})`)
                })
            })
            .catch (error => console.error('Error in getUsers: ', error))
        }catch (error) {
            console.error('unexpected error: ', error)
        } 
    })
    .catch(error => console.error('Connection failed', error))
    .finally(() => disconnect())  