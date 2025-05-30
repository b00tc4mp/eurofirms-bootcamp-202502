import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {

        try {

            return createPost('6831953cafa1befb3c6a5a90', 'https://media.giphy.com/media/l3vQXWwQMM9A9a1RC/giphy.gif?cid=ecf05e47kzfaip7t9mfzfhchhct07dv6oxipzyhcgnbknos4&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'I am in a mission!')

                .then(() => console.log('post created'))
                .catch(error => console.error(error))

        } catch (error) {

            console.error(error)
        }
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())

