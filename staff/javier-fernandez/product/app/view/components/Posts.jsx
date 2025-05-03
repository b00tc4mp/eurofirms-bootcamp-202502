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

    console.log('posts -> render')

    return <>
       {posts.map(post => <post key={post.id} post={post} onPostDeleted={handlePostDeleted} />)}
     </>
}