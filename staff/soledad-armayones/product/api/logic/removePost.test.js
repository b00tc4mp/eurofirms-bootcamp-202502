import { removePost } from './removePost.js'

try {
    removePost('user-1', 'post-2')

    console.log('post removed')
} catch (error) {
    console.error(error)
}