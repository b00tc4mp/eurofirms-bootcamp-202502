import { useEffect, useState } from 'react'

import { Post } from './Post'

import { logic } from '../../logic'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            const posts = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handlePostDeleted = () => {
        try {
            const posts = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Posts -> render')
    
    /**
     * Para cada post devuelve el componente a traves de un prop 
     * (en este caso post)
     */

    return <>
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted = {handlePostDeleted} />)}
    </>
}