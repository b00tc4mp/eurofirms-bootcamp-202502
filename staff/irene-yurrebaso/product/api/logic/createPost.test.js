import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

//primero, conectamos a mongodb
connect('mongodb://localhost:27017/test')
    //luego, probamos lógica
    .then(() => {
        try {
            return createPost('6834a9a7afaf3e44fe405f1f', 'https://media.giphy.com/media/dc5NLlkPEj92Vj09IY/giphy.gif?cid=82a1493b13oiy1vflkwwbig3vyyfw1h2zlqu7e8l2gh9cfz1&ep=v1_gifs_trending&rid=giphy.gif&ct=g', 'Good morning')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    //captura errores de conexión
    .catch(error => console.log(error))
    //finalmente, desconectar
    .finally(() => disconnect())
