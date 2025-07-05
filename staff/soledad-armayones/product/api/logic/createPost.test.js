import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            return createPost('683c18c652026226a9a76b1e', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3JzdzZnZ3FkMGRwNTZxb3piODk4dDE0aDh1cjExems3bGM4Yjh0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rn1iqPnAnD07KYrQVc/giphy.gif', 'bad mosquito')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())