import { createPost } from './createPost.js'

try {

    createPost('user-2', 'https://media.giphy.com/media/xUPGcMFEIgIkVsptQs/giphy.gif?cid=ecf05e47ksj7ap5h065caw60msh5rf6rxsuxcelhjaf8qgwm&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'With my friends in the Big Ben!')

    console.log('post created')

} catch (error) {

    console.error(error)

}