import { createPost } from './createPost.js'

try {
    //la api no guarda estados (ej. userId), por lo que cada vez que hagamos una operacion en nombre de un usuario, hay que enviarle el userId
    createPost('user-4', 'https://media.giphy.com/media/dc5NLlkPEj92Vj09IY/giphy.gif?cid=82a1493b13oiy1vflkwwbig3vyyfw1h2zlqu7e8l2gh9cfz1&ep=v1_gifs_trending&rid=giphy.gif&ct=g', 'Good morning')

    console.log('post created')
} catch(error) {
    console.error(error)
}