import  { data } from '../data'

/**
 * Gets all posts from users in the system.
 * 
 * @returns {[{
 * id:string,
 * author: string,
 * image: string,
 * text: string,
 * date: Date
 * }]} The posts from users in the system.
 */
export const getPosts = () => {
    const posts = data.getPosts().toReversed()
    const user = data.getUsers()
    const userId = data.getUsersId ()

    posts.forEach(post => {
        const authorId = post.author

        const user = useFormState.find(user => user.id ===authorId)

        const username = user.username

        post.author = username

        post.own = authorId === userId
    })

    return posts
}