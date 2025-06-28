import { connect, disconnect } from '../data/index.js'

import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() =>{
        try {
            return createPost('6839edd18b0791c61e46de76', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VhMjJuYndkOXgxMTV6a2NjbHMyeGU0OHdkcTd6NWFnc2t6c2h2NiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif', 'pepe geroma')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())