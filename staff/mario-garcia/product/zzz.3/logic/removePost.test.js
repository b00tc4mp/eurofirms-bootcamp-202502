import { removePost } from './removePost.js'
try {

    removePost('user-10', 'post-2')

    console.log('post removed')

} catch (error) {
    console.error(error)
}