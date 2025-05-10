import { createPost } from './createPost.js'

try {

    createPost('user-1', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG10N3FiY3B3ZWZiMDdyYTVwbWNua3NoNHk5ZTBhMXp1NHp1MXlqMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gqlllRaVSyNxe/giphy.gif', 'I am dreaming!')

    console.log('post created')

} catch (error) {

    console.error(error)

}