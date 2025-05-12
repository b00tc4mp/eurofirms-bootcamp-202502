import { removePost } from './removePost.js'
try {
    removePost ('user-1', 'post-1')

    console.log('Post removed.')
} catch(error){
    console.error(error)
}