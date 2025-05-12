import { data } from '../data/index.js'

export const removePost = (userId, postId) => {
    if (typeof userId !== 'string') throw new Error('Invalid userId type.')
    if (userId.length < 6) throw new Error('Invalid userId length.') 

    if(typeof postId !== 'string') throw new Error ('Invalid postId type.')
    if (postId.length < 6) throw new Error ('Invalid postId length.')
        
    const users = data.getUsers()
    
    const user = users.find(user => user.id === userId)

    if(!user) throw new Error ('User not found.')
    
    const posts = data.getPosts()

    const postIndex = posts.findIndex(post => post.id === postId)

    if (postIndex < 0) throw new Error ('Post not found.')

    const post = posts[postIndex]
    
    if (post.author !== userId) throw new Error ('User is not author of post.')

    posts.splice(postIndex, 1)
    
    data.setPosts(posts)
}