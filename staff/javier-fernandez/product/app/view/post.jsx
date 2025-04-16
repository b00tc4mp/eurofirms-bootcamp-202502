import { useEffect, useState } from 'react'

import { logic } from '../../logic'

export const Post = () => {
    const [posts, setPost] = useState([])

    useEffect(() = {
        try {
            const post = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }, [])
    
}