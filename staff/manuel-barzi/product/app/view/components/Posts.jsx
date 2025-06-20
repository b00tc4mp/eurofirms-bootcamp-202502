import { useEffect, useState } from 'react'

import { Post } from './Post'

import { logic } from '../../logic'

export const Posts = ({ alert, confirm }) => {
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
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} alert={alert} confirm={confirm} />)}
    </>
}