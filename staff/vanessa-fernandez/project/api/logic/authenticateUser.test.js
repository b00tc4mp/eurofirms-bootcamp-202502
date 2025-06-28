import {connect, disconnect } from '../data/index.js'
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test-gymplan')
    .then(() => {
        try{
            return authenticateUser('harryP', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())