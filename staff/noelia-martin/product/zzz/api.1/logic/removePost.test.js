import { removePost } from './removePost.js'

try {
    removePost('user-2', 'post-2')

    console.log('post removed')
} catch (error) {
    console.error(error)
}