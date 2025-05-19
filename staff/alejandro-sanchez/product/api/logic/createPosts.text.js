import { createPost } from './createPost.js'

try {
    createPost('user-2', 'https://media.giphy.com/media/1qB3EwE3c54A/giphy.gif?cid=82a1493b5d13t07zjy4lm9lnr2ub8cg6ehtrrx1z3bfkrhen&ep=v1_gifs_trending&rid=giphy.gif&ct=g', 'pin8 dancing')

    console.log('post created')
} catch (error) {
    console.error(error)
}