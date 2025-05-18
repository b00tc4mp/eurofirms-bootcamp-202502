import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Post } from './Post'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            logic.getPosts()
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handlePostDeleted = () => {
        try {
            logic.getPosts()
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Posts -> render')

    return <>
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />)}
    </>
}